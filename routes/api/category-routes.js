const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// lol motly copied from product routes


//get all  catagories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one catagory
router.get('/:id', async (req, res) => {
    try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category found with id ${req.params.id}` });
      return;
    }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post a thing
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update a catagory
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category found with id ${req.params.id}` });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete a catagory
router.delete('/:id', async (req, res) => {
  try {
    const results = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!results) {
      res.status(404).json({ message: `No category found with id ${req.params.id}` });
      return;
    }
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
