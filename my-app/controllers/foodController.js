import Food from '../models/Food.js';

// Search food by name
export const searchFoods = async (req, res) => {
  try {
    const search = req.query.search || '';
    const foods = await Food.find({
      name: { $regex: search, $options: 'i' }
    }).limit(20);
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch foods', error: err.message });
  }
};

