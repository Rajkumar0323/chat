import prisma from "../prisma/client.js";

export const addVisitor = async (req, res) => {
  const { ownerId, reason, capturedImage } = req.body;
  const date = new Date().toISOString();

  try {
    const newVisitor = await prisma.visitors.create({
      data: { owner_id: ownerId, reason, image: capturedImage, date },
    });

    res.status(201).json({ message: "Visitor recorded", visitor: newVisitor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVisitors = async (req, res) => {
  const { ownerId } = req.params;

  try {
    const visitors = await prisma.visitors.findMany({
      where: { owner_id: ownerId },
      orderBy: { id: "desc" },
    });

    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
