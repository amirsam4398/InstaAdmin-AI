import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { planName, price, customerPhone, receiptImage, target } = await request.json();

    // اطلاعات حساب و کارت شما
    const paymentInfo = {
      bankName: 'بانک ملت',
      cardHolder: 'امیر سام (میثم) یعقوبی حسنعلی ده',
      cardNumber: '6104338641802312',
      targetPhoneForReceipt: '09366681963', // ارسال خودکار فیش به واتساپ و بله
    };

    // ساخت لینک ارسال خودکار پیام به واتساپ و بله برای شماره شما
    const notificationMessage = `خرید جدید پلن سئو هوش مصنوعی!\nنام پلن: ${planName}\nمبلغ: ${price}\nشماره مشتری: ${customerPhone}\nسایت/پیج هدف: ${target}\nلطفاً فیش واریزی به کارت ${paymentInfo.cardNumber} بررسی شود.`;
    
    const whatsappLink = `https://wa.me/989366681963?text=${encodeURIComponent(notificationMessage)}`;
    const baleLink = `https://ble.ir/989366681963?text=${encodeURIComponent(notificationMessage)}`;

    return NextResponse.json({
      success: true,
      message: 'سفارش ثبت شد. لطفاً مبلغ را به کارت مشخص‌شده واریز و فیش را ارسال کنید.',
      data: {
        paymentInfo,
        whatsappLink,
        baleLink,
        brand: 'استارتاپ فناورانه هوش مصنوعی رویال فام - توسعه‌دهنده: امیر سام یعقوبی'
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'خطا در ثبت پرداخت' }, { status: 500 });
  }
}
