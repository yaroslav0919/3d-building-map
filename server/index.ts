import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import PDFDocument from "pdfkit";

const port = process.env.PORT || 4000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.get("/", async (req, res) => {
  res.send("OK ✅");
});

app.get("/download", async (req, res) => {
  try {
    const { sixth, fifth, fourth, third, second, first, ground, spaces } =
      req.query;

    const filename = `plans.pdf`;
    const doc = new PDFDocument({ bufferPages: true, size: "LETTER" });
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-disposition": `attachment;filename=${filename}`,
    });
    doc.on("data", (chunk) => stream.write(chunk));
    doc.on("end", () => stream.end());

    doc
      .fillColor("#e26e40")
      .font("Helvetica-Bold")
      .fontSize(24)
      .text(`Lorem Ipsum Building`);
    doc.moveDown();
    doc
			.fillColor("#2a3734")
			.font("Helvetica")
			.fontSize(16)
			.text(`Floor and Space Plans`);

		if (sixth === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Sixth Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/6.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Sixth Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/6.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (fifth === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Fifth Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/5.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Fifth Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/5.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (fourth === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Fourth Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/6.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Fourth Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/6.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (third === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Third Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/5.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Third Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/5.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (second === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Second Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/6.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Second Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/6.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (first === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`First Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/5.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`First Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/5.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

		if (ground === "true") {
			doc.addPage();
			doc
				.fillColor("#2a3734")
				.font("Helvetica")
				.fontSize(16)
				.text(`Ground Floor - Floor Plan`);
			doc.image(__dirname + "/images/plans/6.png", {
				fit: [475, 300],
				align: "center",
				valign: "center",
			});
			if (spaces === "true") {
				doc.addPage();
				doc
					.fillColor("#2a3734")
					.font("Helvetica")
					.fontSize(16)
					.text(`Ground Floor - Space Plan`);
				doc.image(__dirname + "/images/spaces/6.png", {
					fit: [475, 300],
					align: "center",
					valign: "center",
				});
			}
		}

    doc.end();
  } catch (err: any) {
    res.status(500).send(err?.message || err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port} 🏃`);
});
