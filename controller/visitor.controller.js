import prisma from "../prisma/client.js";

export const addVisitor = async (req, res) => {
  const { ownerId, reason, capturedImage } = req.body;
  const date = new Date().toISOString();

  try {
    const newVisitor = await prisma.visitors.create({
      data: { owner_id: ownerId, reason, image: capturedImage, date },
    });

    const safeVisitor = JSON.parse(
      JSON.stringify(newVisitor, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.status(201).json({ message: "Visitor recorded", visitor: safeVisitor });
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

    // Convert BigInt to string for safe JSON serialization
    const safeVisitors = JSON.parse(
      JSON.stringify(visitors, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.json(safeVisitors);
  } catch (err) {
    console.log("Error", err);

    res.status(500).json({ error: err.message || "Something went wrong" });
  }
};
