const express = require('express');
const bodyParser = require('body-parser');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.post('/generate_pdf', async (req, res) => {
    const data = req.body;

    try {
        const pdfDoc = await PDFDocument.create();
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const logoImageBytes = fs.readFileSync('logo.png');
        const logoImage = await pdfDoc.embedPng(logoImageBytes);
        const page = pdfDoc.addPage();

        const { width, height } = page.getSize();
        const fontSize = 12;
        const logoDims = logoImage.scale(0.25);

        page.drawImage(logoImage, {
            x: 50,
            y: height - logoDims.height - 10,
            width: logoDims.width,
            height: logoDims.height,
        });

        page.drawText('Detalles del Compromiso', {
            x: 200,
            y: height - 50,
            size: 20,
            font: timesRomanFont,
            color: rgb(0, 0, 1),
        });

        page.drawText(`Título: ${data.titulo}`, {
            x: 50,
            y: height - 100,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Fecha: ${data.fecha}`, {
            x: 50,
            y: height - 120,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Hora: ${data.hora}`, {
            x: 50,
            y: height - 140,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Integrantes: ${data.integrantes}`, {
            x: 50,
            y: height - 160,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Texto: ${data.texto}`, {
            x: 50,
            y: height - 180,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Responsables: ${data.responsables}`, {
            x: 50,
            y: height - 200,
            size: fontSize,
            font: timesRomanFont,
        });

        page.drawText(`Estado: ${data.estado}`, {
            x: 50,
            y: height - 220,
            size: fontSize,
            font: timesRomanFont,
        });

        const pdfBytes = await pdfDoc.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${data.titulo}.pdf`);
        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        res.status(500).send({ error: 'Error generating PDF' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const axios = require('axios');

app.post('/public/pr.html', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5500/public/index.html', {
            data: req.body
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Error communicating with another service' });
    }
});

app.post('/public/pr.html', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5500/public/index.html', {
            data: req.body
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Error communicating with another service' });
    }
});
