// ===== Hindi / English language toggle =====
(function () {
  "use strict";

  // Hindi translations. English stays in the HTML (captured as original).
  const HI = {
    // Nav
    "nav.about": "परिचय",
    "nav.experience": "अनुभव",
    "nav.skills": "कौशल",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.contact": "संपर्क",

    // Hero
    "hero.eyebrow": "👋 नमस्ते — मैं हूँ",
    "hero.name": "अजेंद्र कुमार तंदान",
    "hero.roleMain": "ऑपरेशंस प्रोफेशनल · कंप्यूटर ऑपरेटर · ",
    "hero.roleAccent": "AI ऑटोमेशन",
    "hero.lead":
      "ऑफिस असिस्टेंस, कंप्यूटर ऑपरेशन और डेटा मैनेजमेंट में 10+ वर्षों का अनुभव। रोज़मर्रा के प्रशासनिक काम को सरल बनाने के लिए मैं AI टूल्स और ऑटोमेशन का उपयोग करता हूँ — लिपिकी कार्यप्रवाह से लेकर ब्राउज़र और सॉफ़्टवेयर ऑटोमेशन तक।",
    "hero.hire": "मुझे हायर करें",
    "hero.fact1": "वर्षों का अनुभव",
    "hero.fact2": "2016 से चालू",
    "hero.fact3": "ऑटोमेशन टूल्स",
    "hero.badgeLoc": "📍 रायपुर, छत्तीसगढ़",
    "hero.badgeAvail": "✅ काम के लिए उपलब्ध",

    // About
    "about.title": "मेरे बारे में",
    "about.sub": "मैं कौन हूँ और क्या करता हूँ — एक छोटा सा परिचय।",
    "about.hSummary": "सारांश",
    "about.p1":
      "10+ वर्षों के ऑफिस असिस्टेंस, कंप्यूटर ऑपरेशन और डेटा मैनेजमेंट अनुभव वाले <strong>ऑपरेशंस प्रोफेशनल</strong>। AI टूल्स, लिपिकी कार्यप्रवाह और ऑटोमेशन टूल्स से रोज़मर्रा की प्रशासनिक सहायता को सरल बनाने में अनुभवी।",
    "about.p2":
      "कंप्यूटर ऑपरेटर की नौकरी के साथ-साथ मैं 2016 से <strong>कॉमन सर्विस सेंटर (CSC)</strong> चला रहा हूँ — 10+ वर्षों से नागरिकों को ऑनलाइन सरकारी और डिजिटल सेवाएँ दे रहा हूँ।",
    "about.hSoft": "सॉफ्ट स्किल्स",
    "about.soft1": "टीम में काम करने की क्षमता",
    "about.soft2": "किसी भी चुनौतीपूर्ण काम के लिए तैयार",
    "about.soft3": "किसी भी परिस्थिति में डटे रहने की क्षमता",
    "about.soft4": "अच्छा विश्लेषण और समझाने की क्षमता",
    "about.hAct": "गतिविधियाँ और उपलब्धियाँ",
    "about.act1": "उच्च विद्यालय स्तर की निबंध प्रतियोगिता में भाग लिया और जीता",
    "about.act2": "AICTE मान्यता प्राप्त शॉर्ट टर्म कोर्स — अच्छा रिज़्यूमे लिखना और इंटरव्यू की तैयारी",
    "about.act3": "साइबर सिक्योरिटी स्पेशलिस्ट वर्कशॉ में भागीदारी",
    "about.hQuick": "त्वरित संपर्क",
    "about.addr":
      "🏠 गाँव – सिर्री, डाक – कांकी, थाना – खरोरा, ब्लॉक – टिल्डा, जिला – रायपुर, छत्तीसगढ़, पिन – 493225",

    // Experience
    "exp.title": "कार्य अनुभव",
    "exp.sub": "मेरी भूमिकाएँ और रोज़मर्रा में मेरा काम।",
    "exp.role1": "कंप्यूटर ऑपरेटर",
    "exp.chip1": "नवंबर 2025 – अब तक",
    "exp.dur1": "अवधि: नवंबर 2025 से (11 महीने)",
    "exp.desc1":
      "समिति के लिए रोज़मर्रा के कंप्यूटर ऑपरेशन, रिकॉर्ड रखरखाव, डेटा एंट्री और ऑफिस असिस्टेंस — डिजिटल रिकॉर्ड बनाए रखना और लिपिकी कार्यप्रवाह में सहायता करना।",
    "exp.role2": "स्वामी / संचालक — कॉमन सर्विस सेंटर (CSC)",
    "exp.org2": "स्वरोज़गार · रायपुर, छत्तीसगढ़",
    "exp.chip2": "2016 – अब तक · 10+ वर्ष",
    "exp.dur2": "अवधि: 2016 से (10+ वर्ष)",
    "exp.desc2":
      "CSC चलाकर नागरिकों को ई-गवर्नेंस और डिजिटल सेवाएँ देना — ऑनलाइन फ़ॉर्म, दस्तावेज़ीकरण, प्रिंटिंग, बैंकिंग और सरकारी योजना सहायता — साथ ही ग्राहकों, रिकॉर्ड और रोज़मर्रा के कामकाज का स्वतंत्र रूप से प्रबंधन।",
    "exp.hTraining": "तकनीकी प्रशिक्षण",
    "train.chip1": "जुलाई – अगस्त 2014",
    "train.p1": "<strong>प्रोजेक्ट कार्य:</strong> बिलिंग और नेटवर्किंग",
    "train.d1": "19 जुलाई 2014 से 18 अगस्त 2014 (30 दिन)",
    "train.chip2": "जून – जुलाई 2015",
    "train.org2b": "आईटी विभाग",
    "train.p2": "<strong>प्रोजेक्ट कार्य:</strong> छत्तीसगढ़ स्टेट वाइड एरिया नेटवर्क (CGSWAN)",
    "train.d2": "5 जून 2015 से 4 जुलाई 2015 (30 दिन)",

    // Skills
    "skills.title": "कौशल और टूल्स",
    "skills.sub": "मैं किन चीज़ों के साथ काम करता हूँ — ऑफिस सूट, वेब, AI, सर्वर और बहुत कुछ।",
    "skills.g1": "🖥️ ऑफिस और डेटा",
    "skills.g2": "🤖 AI और ऑटोमेशन",
    "skills.g3": "🌐 वेब और डेवलपमेंट",
    "skills.g4": "📣 डिजिटल मार्केटिंग",
    "skills.g5": "⚙️ सर्वर और होस्टिंग",
    "skills.g6": "🚀 स्टार्टअप और सुरक्षा",
    "skills.tData": "डेटा मैनेजमेंट",
    "skills.tClerical": "प्रशासनिक कार्यप्रवाह",
    "skills.tAiAuto": "AI ऑटोमेशन",
    "skills.tBrowser": "ब्राउज़र ऑटोमेशन",
    "skills.tProto": "प्रोटोटाइप डेवलपमेंट",
    "skills.tCms": "CMS मैनेजमेंट",
    "skills.tDb": "डेटाबेस",
    "skills.tSw": "सॉफ़्टवेयर निर्माण",
    "skills.tDm": "डिजिटल मार्केटिंग",
    "skills.tSm": "सोशल मीडिया मैनेजमेंट",
    "skills.tSeo": "SEO ऑप्टिमाइज़ेशन",
    "skills.tVps": "VPS होस्टिंग",
    "skills.tSpm": "स्टार्टअप प्रोजेक्ट मैनेजमेंट",
    "skills.tSeco": "स्टार्टअप इकोसिस्टम / ऐप हैंडलिंग",
    "skills.tCyber": "साइबर सुरक्षा अभ्यास",

    // Projects
    "proj.title": "प्रोजेक्ट्स और पोर्टफोलियो",
    "proj.sub": "चुनिंदा शैक्षणिक प्रोजेक्ट्स और लाइव काम।",
    "proj.kind1": "लाइव वेबसाइट",
    "proj.h1": "व्यक्तिगत पोर्टफोलियो",
    "proj.p1": "Vercel पर होस्ट किया गया मेरा मौजूदा पोर्टफोलियो वेबसाइट।",
    "proj.h2": "कोड और प्रयोग",
    "proj.p2": "रिपॉज़िटरी, प्रोटोटाइप और ओपन-सोर्स योगदान।",
    "proj.kind3": "सॉफ़्टवेयर",
    "proj.h3": "डेटा एंट्री ऑटोमेशन सॉफ़्टवेयर",
    "proj.p3": "दोहराए जाने वाले डेटा-एंट्री कार्यों को ऑटोमेट करने और मैनुअल मेहनत घटाने के टूल्स।",
    "proj.ask": "डेमो के लिए संपर्क करें",
    "proj.kind4": "प्रमुख प्रोजेक्ट",
    "proj.h4": "संचार प्रोटोकॉल से SMS भेजना",
    "proj.p4": "ऐसा SMS गेटवे जो कंप्यूटर को टेलीकॉम नेटवर्क के ज़रिए SMS भेजने और प्राप्त करने देता है — ईमेल व अन्य फ़ॉर्मैट से मीडिया रूपांतरण के साथ।",
    "proj.kind5": "उप-प्रोजेक्ट",
    "proj.h5": "क्लाउड कंप्यूटिंग का बिज़नेस मॉडल",
    "proj.p5": "अलग एन्क्रिप्शन/डिक्रिप्शन सेवाओं पर आधारित क्लाउड बिज़नेस मॉडल — स्टोरेज और की सेवाओं का अधिकार दो अलग-अलग प्रोवाइडर्स के पास।",
    "proj.kind6": "प्रोजेक्ट",
    "proj.h6": "अपराध रिकॉर्ड प्रबंधन प्रणाली",
    "proj.p6": "रिकॉर्ड की उपलब्धता के बारे में पुलिस विभागों के बीच जानकारी साझा करने की प्रणाली — शहर-व्यापी समन्वय के लिए।",

    // Contact
    "contact.title": "संपर्क करें",
    "contact.sub": "ऑपरेशंस, डेटा मैनेजमेंट, एडमिन सपोर्ट और ऑटोमेशन में अवसरों के लिए खुला हूँ।",
    "contact.addr":
      "गाँव – सिर्री, डाक – कांकी, थाना – खरोरा, ब्लॉक – टिल्डा,<br />जिला – रायपुर, छत्तीसगढ़, पिन – 493225",

    // Footer
    "foot.by": "अजेंद्र कुमार तंदान · रायपुर, छत्तीसगढ़",
    "foot.portfolio": "पोर्टफोलियो",
    "foot.top": "ऊपर जाएं ↑"
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));

  // Capture the original English content straight from the HTML.
  const original = new Map();
  nodes.forEach((el) => original.set(el, el.innerHTML));

  let current = "en";
  try {
    current = localStorage.getItem("akt-lang") === "hi" ? "hi" : "en";
  } catch (_) {}

  const langBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  function apply(lang) {
    current = lang;
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "hi" && HI[key] != null) {
        el.innerHTML = HI[key];
      } else {
        el.innerHTML = original.get(el);
      }
    });

    document.documentElement.lang = lang;
    if (langLabel) langLabel.textContent = lang === "hi" ? "EN" : "हिं";
    if (langBtn) {
      const tip = lang === "hi" ? "Switch to English" : "हिंदी में देखें";
      langBtn.setAttribute("title", tip);
      langBtn.setAttribute("aria-label", tip);
    }
    try {
      localStorage.setItem("akt-lang", lang);
    } catch (_) {}
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => apply(current === "hi" ? "en" : "hi"));
  }

  // Restore saved language (applies Hindi if it was chosen earlier).
  apply(current);
})();
