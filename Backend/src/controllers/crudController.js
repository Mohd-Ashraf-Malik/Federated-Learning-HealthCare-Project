const createCrudController = (Model, options = {}) => {
  const {
    populate = [],
    sort = { createdAt: -1 },
    searchFields = [],
  } = options;

  const applyPopulate = (query) => {
    let populatedQuery = query;

    for (const field of populate) {
      populatedQuery = populatedQuery.populate(field);
    }

    return populatedQuery;
  };

  const buildFilter = (queryParams) => {
    const filter = {};

    for (const [key, value] of Object.entries(queryParams)) {
      if (["page", "limit", "search"].includes(key)) {
        continue;
      }

      filter[key] = value;
    }

    if (queryParams.search && searchFields.length > 0) {
      filter.$or = searchFields.map((field) => ({
        [field]: { $regex: queryParams.search, $options: "i" },
      }));
    }

    return filter;
  };

  return {
    create: async (req, res, next) => {
      try {
        const document = await Model.create(req.body);
        const createdDocument = await applyPopulate(
          Model.findById(document._id)
        );

        res.status(201).json(createdDocument);
      } catch (error) {
        next(error);
      }
    },

    getAll: async (req, res, next) => {
      try {
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = Math.max(Number(req.query.limit) || 20, 1);
        const skip = (page - 1) * limit;
        const filter = buildFilter(req.query);

        const [items, total] = await Promise.all([
          applyPopulate(Model.find(filter).sort(sort).skip(skip).limit(limit)),
          Model.countDocuments(filter),
        ]);

        res.json({
          items,
          pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
          },
        });
      } catch (error) {
        next(error);
      }
    },

    getById: async (req, res, next) => {
      try {
        const document = await applyPopulate(Model.findById(req.params.id));

        if (!document) {
          return res.status(404).json({ message: `${Model.modelName} not found` });
        }

        res.json(document);
      } catch (error) {
        next(error);
      }
    },

    update: async (req, res, next) => {
      try {
        const document = await applyPopulate(
          Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          })
        );

        if (!document) {
          return res.status(404).json({ message: `${Model.modelName} not found` });
        }

        res.json(document);
      } catch (error) {
        next(error);
      }
    },

    remove: async (req, res, next) => {
      try {
        const document = await Model.findByIdAndDelete(req.params.id);

        if (!document) {
          return res.status(404).json({ message: `${Model.modelName} not found` });
        }

        res.json({
          message: `${Model.modelName} deleted successfully`,
          id: document._id,
        });
      } catch (error) {
        next(error);
      }
    },
  };
};

export default createCrudController;
