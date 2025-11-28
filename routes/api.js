const express = require('express');
const router = express.Router();
// simple in-memory store
let items = [
  { id: 1, name: "alpha" },
  { id: 2, name: "beta" }
];
router.get('/items', (req, res) => res.json(items));
router.get('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const it = items.find(i => i.id === id);
  if (!it) return res.status(404).json({ error: "Not found" });
  res.json(it);
});
router.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name required" });
  const id = items.length ? Math.max(...items.map(i=>i.id)) + 1 : 1;
  const it = { id, name };
  items.push(it);
  res.status(201).json(it);
});
module.exports = router;
