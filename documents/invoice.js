module.exports = function (pdfDoc, receipt) {
    pdfDoc
        .font('Courier')
        .fontSize(24)
        .text('ASSAM REAL ESTATE APPELLATE TRIBUNAL', { align: 'center' })
        .moveDown(1.5)
        .font('Times-Roman')
        .fontSize(16)
        .text('---------- Payment Receipt -----------', { align: 'center' })
        .moveDown(2)
        .fontSize(14)
        .text('Invoivce to', { align: 'left' })
        .fontSize(12)
        .moveDown(1)
        .text('Name:                                  ' + 'Jhon Doe')
        .moveDown(0.1)
        .text('Email Id:                              ' + 'jhondoe@gmail.com')
        .moveDown(0.1)
        .text('Appeal Id:                           ' + '1000001')
        .moveDown(0.1)
        .text('Transaction Id:                    ' + '100rfetfy0001')
        .moveDown(0.1)
        .text('Status:                                  ' + 'Success')
        .moveDown(0.1)
        .text('Transaction Date:                ' + '24-10-2022')
        .moveDown(0.1)
        .text('service:                                ' + 'Appeal Fee')
        .moveDown(0.1)
        .text('Payment Method:                ' + 'Debit Card')
        .moveDown(0.1)
        .text('Amount:                              ' + '1000/-')
        .moveDown(3)
        .text('-------------------------------------', { align: 'center' });
};