"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, Award, BookOpen, Star, DollarSign, Crown } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="noise"
      cardStyle="layered-gradient"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Columbia School"
          navItems={[
            { name: "Bosh", id: "hero" },
            { name: "Haqida", id: "about" },
            { name: "Kurslar", id: "features" },
            { name: "Izohlar", id: "testimonials" },
            { name: "Bog'lanish", id: "contact" },
          ]}
          button={{
            text: "Qo'ng'iroq Qil",            href: "tel:+998971326007"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Kelajagingiz uchun sifatli ta'lim"
          description="Columbia School O'quv Markazi - Tashkentda eng yaxshi o'qituvchilar va isbotlangan ta'lim tizimi bilan sizning bolangizning muvaffaqiyatiga yordam beramiz. Respektli muhit va xushmuomala ta'lim barcha yoshdagi o'quvchilar uchun."
          tag="Ta'lim Markazi"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          testimonials={[
            {
              name: "Aziza Karimova",              handle: "Ota-ona",              testimonial: "Talabchan o'qituvchilar, yaxshi dastur, o'zaro hurmat. Nafaqat ilm berish, balki odob berishdan ham erinishmaydi.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-indian-business-woman_53876-139739.jpg?_wi=1"},
            {
              name: "Timur Abdullaev",              handle: "O'quvchi",              testimonial: "Imtihonlarga tayyorlashda juda ko'p yordam berdi. Endi men oʻz ishimdan ishonchli va tayyorman.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/serious-pensive-young-student-looking-directly-camera_176532-8154.jpg?_wi=1"},
            {
              name: "Dilorom Nazarova",              handle: "Ota-ona",              testimonial: "Bolamni bu o'quv markaziga juda quyosh va u dastgir ko'rilmoqda. Tavsiya qilaman!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=1"},
          ]}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/young-teen-girls-study-desk-attending-virtual-webinar-class_482257-123130.jpg"
          imageAlt="Modern o'quv xonasi, o'qituvchi va o'quvchilar"
          mediaAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            { text: "📞 Hozir Qo'ng'iroq Qil", href: "tel:+998971326007" },
            { text: "Konsultatsiya so'rash", href: "#contact" },
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Biz Haqimizda"
          description="Columbia School O'quv Markazi - Tashkentning eng ishonchli ta'lim markazlaridan biri. Biz o'quvchilarning akademik muvaffaqiyyati, intiqob rivojlanishi va xulqiy sifatlari uchun ish olamiz. Har bir o'quvchi biz uchun muhim va bizning maqsadi - ularning kelajagi qurish."
          tag="Muvaffaqiyyat Qo'y"
          tagIcon={Award}
          imageSrc="http://img.b2bpic.net/free-photo/portrait-female-business-leader-her-colleagues-two-cheerful-men-woman-standing-together-after-corporate-meeting-office-smiling-looking-camera-female-leadership-business-concept_74855-24566.jpg"
          imageAlt="Columbia School o'qituvchilari va o'quvchilari"
          buttons={[
            { text: "Dasturlar Haqida", href: "#features" },
            { text: "Aloqa Qilish", href: "#contact" },
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Bizning Dasturlar va Xizmatlar"
          description="Columbia School O'quv Markazida barcha yoshdagi o'quvchilar uchun yuqori sifatli ta'lim dasturlari mavjud. Har bir kurs o'quvchining individual ehtiyojlariga mos keladi."
          tag="Ta'lim Xizmatlari"
          tagIcon={BookOpen}
          accordionItems={[
            {
              id: "1",              title: "Maktab Predmetlari Repetitorligi",              content: "Matematika, tarix, adabiyot, ingliz tili va boshqa predmetlar bo'yicha individual va guruh darslar. Biz har bir o'quvchining mavzuni tushuniшini ta'minlaymiz va o'z oqimiga mos ravishda ta'lim beramiz."},
            {
              id: "2",              title: "Imtihonlarga Tayyorlash",              content: "Davlat imtihonlari (OTM), til imtihonlari va boshqa muhim imtihonlarga maxsus tayyorlash kursları. Biz talabalar uchun tuzilgan imtihon strategiyalarini o'rgatamiz."},
            {
              id: "3",              title: "O'quvchilarkka Rivojlantirish Programmalari",              content: "Kritik fikrlash, ijodiy fikrlash va muammo hal qilish ko'nikmalarini rishlab berish. Biz o'quvchilarga akademik va shaxsy rivojlanishi uchun alohida shartlar yaratamiz."},
            {
              id: "4",              title: "Xorij Tili Kursları",              content: "Ingliz, Koreys, Frantsuz va Nemis tillari bo'yicha darslar. Tillarni to'la savodxonlik darajasiga oqitamiz, so'zlashuvdan to'liq yozuvga qadar."},
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-good-looking-young-dark-skinned-perspective-entrepreneur-looking-digital-tablet-looking-information-about-team-project-friend-meeting-library_176420-8281.jpg"
          imageAlt="O'quvchilar darsni tinglayotgan holda"
          mediaAnimation="blur-reveal"
          mediaPosition="left"
          useInvertedBackground={false}
          buttons={[{ text: "Kurslarni Ko'rish", href: "#pricing" }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Ota-ona va O'quvchilardan Fikrlar"
          description="Columbia School O'quv Markazida o'rganayotgan o'quvchilar va ularning ota-onalarining haqiqiy fikrlari."
          tag="5★ Baholar"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",              name: "Aziza Karimova",              role: "Ota-ona",              company: "Tashkent",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-indian-business-woman_53876-139739.jpg?_wi=2"},
            {
              id: "2",              name: "Timur Abdullaev",              role: "O'quvchi, 11-sinf",              company: "Tashkent",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/serious-pensive-young-student-looking-directly-camera_176532-8154.jpg?_wi=2"},
            {
              id: "3",              name: "Dilorom Nazarova",              role: "Ota-ona",              company: "Sergeli Tumani",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=2"},
            {
              id: "4",              name: "Alisher Mirjaev",              role: "O'quvchi, 9-sinf",              company: "Tashkent",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/hispanic-teenager-wearing-student-backpack-holding-books-smiling-looking-side-staring-away-thinking_839833-3181.jpg"},
            {
              id: "5",              name: "Gulnora Xusainova",              role: "Ota-ona",              company: "Yunusobod Tumani",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-1323.jpg"},
            {
              id: "6",              name: "Yasmin Karimova",              role: "O'quvchi, 8-sinf",              company: "Tashkent",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-casual-wearing-pink-background_185193-110335.jpg"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Kurslar va Narxlar"
          description="Columbia School O'quv Markazida barcha budjetlar uchun to'g'ri kurs va paketlar mavjud. Ro'yxatdan o'ting va bepul konsultatsiya oling."
          tag="Baholi Xizmatlar"
          tagIcon={DollarSign}
          plans={[
            {
              id: "basic",              badge: "Boshlang'ich",              badgeIcon: BookOpen,
              price: "99,000 so'm/oy",              subtitle: "Bir predmet bo'yicha individual dars",              buttons: [{ text: "Bepul Konsultatsiya Oling", href: "#contact" }],
              features: [
                "Haftada 2 ta dars",                "Har bir dars 60 minut",                "Shaxsiy o'qituvchi",                "Dars materiallarini taqdim etish",                "Uyga vazifa beriladi"],
            },
            {
              id: "pro",              badge: "Mashhur",              badgeIcon: Sparkles,
              price: "189,000 so'm/oy",              subtitle: "Ikki predmet bo'yicha darslar",              buttons: [{ text: "Bepul Konsultatsiya Oling", href: "#contact" }],
              features: [
                "Haftada 4 ta dars (har bir predmet uchun 2)",                "Har bir dars 60 minut",                "Mavzular bo'yicha testlar",                "Bepul konsultatsiya",                "Imtihonga tayyorlash",                "Muvaffaqyyat garantiyasi"],
            },
            {
              id: "premium",              badge: "Eng Yaxshi",              badgeIcon: Crown,
              price: "299,000 so'm/oy",              subtitle: "Keng dastur - 3 predmet + imtihon tayyorlash",              buttons: [{ text: "Bepul Konsultatsiya Oling", href: "#contact" }],
              features: [
                "Haftada 6 ta dars",                "Har bir dars 90 minut",                "Tugallangan test paketlari",                "Imtihonlarga maxsus tayyorlash",                "Shaxsiy qayd qilish xizmati",                "Haftalik progress amaliyoti",                "Ota-onalar bilan muloqot"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Biz Bilan Bog'lanish"
          description="Chuqur konsultatsiya va ro'yxatdan o'tish uchun bizga aloqa qiling. Biz sizning so'rovingizga 24 soat ichida javob beramiz."
          inputs={[
            {
              name: "studentName",              type: "text",              placeholder: "O'quvchining ismi",              required: true,
            },
            {
              name: "parentPhone",              type: "tel",              placeholder: "+998 __ ___ __ __",              required: true,
            },
            {
              name: "courseInterest",              type: "text",              placeholder: "Qaysi kursga qiziqasiz?",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "Elektron pochta",              required: false,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Izohlar yoki savollar...",            rows: 4,
            required: false,
          }}
          buttonText="Bepul Konsultatsiya Oling"
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/cheerful-students-having-conversation_23-2147655798.jpg"
          imageAlt="O'quvchilar darsda hamjamiyat qilayotgan holda"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="Columbia School O'quv Markazi"
          imageSrc="http://img.b2bpic.net/free-photo/shanghai-night-with-urban-skyscrapers-lights_649448-4449.jpg"
          imageAlt="Tashkent shahri"
          columns={[
            {
              title: "Xizmatlar",              items: [
                { label: "Repetitorlik", href: "#features" },
                { label: "Imtihon Tayyorlash", href: "#features" },
                { label: "Til Kursları", href: "#features" },
                { label: "Narxlar", href: "#pricing" },
              ],
            },
            {
              title: "Aloqa",              items: [
                { label: "📞 +998 97 132 60 07", href: "tel:+998971326007" },
                {
                  label: "📍 Shokirariq ko'cha 94, Tashkent",                  href: "https://maps.google.com/?q=Shokirariq+94+Tashkent"},
                { label: "🕐 Har kuni 07:00 - 20:00", href: "#" },
                {
                  label: "WhatsApp Bilan Aloqa",                  href: "https://wa.me/998971326007"},
              ],
            },
            {
              title: "Qo'shimcha",              items: [
                { label: "Bosh sahifa", href: "#hero" },
                { label: "Haqida", href: "#about" },
                { label: "Izohlar", href: "#testimonials" },
                { label: "Maxfiylik Siyosati", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 Columbia School O'quv Markazi | Hamma huquqlar himoyalangan"
        />
      </div>
    </ThemeProvider>
  );
}
