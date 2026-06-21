import { Product, Category, ProductCategory } from "@/types/product";

export const products: Product[] = [
  // ============================================================
  // POOJA SAMAGRI PRODUCTS (1-49)
  // ============================================================

  // 1. Hawan Samagri Balaji Box
  {
    id: "prod-001",
    slug: "hawan-samagri-balaji-box",
    name: "Hawan Samagri Balaji Box",
    nameHindi: "हवन सामग्री बालाजी बॉक्स",
    category: "pooja-samagri",
    subcategory: "hawan-samagri",
    description:
      "Premium Balaji hawan samagri packed in a sturdy box, containing a sacred blend of dried herbs, roots, and aromatic ingredients for performing hawan rituals. This carefully curated mix purifies the atmosphere and creates a divine ambiance during yagya and hawan ceremonies.",
    descriptionHindi:
      "प्रीमियम बालाजी हवन सामग्री एक मजबूत बॉक्स में पैक, जिसमें सूखी जड़ी-बूटियों, जड़ों और सुगंधित सामग्रियों का पवित्र मिश्रण है। यह हवन अनुष्ठानों के दौरान वातावरण को शुद्ध करती है।",
    shortDescription: "Premium hawan samagri in a convenient box pack for sacred fire rituals.",
    ingredients:
      "Guggal, Loban, Camphor, Dried Herbs, Jatamansi, Agar, Tagar, Nagarmotha, Kapoor Kachri, Sandalwood Powder",
    howToUse:
      "Light the sacred fire in a hawan kund. Add ghee and then sprinkle hawan samagri into the fire while chanting mantras. Use a spoonful at a time for best results.",
    price: 150,
    mrp: 180,
    discount: Math.round(((180 - 150) / 180) * 100),
    weight: "500g",
    images: ["/images/products/Hawan bala ji box.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 38,
    tags: ["hawan", "samagri", "balaji", "havan", "yagya", "fire ritual", "pooja"],
    festival: ["Navratri", "Diwali", "Dussehra", "Makar Sankranti"],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 2. Hawan Samagri Balaji Packet
  {
    id: "prod-002",
    slug: "hawan-samagri-balaji-packet",
    name: "Hawan Samagri Balaji Packet",
    nameHindi: "हवन सामग्री बालाजी पैकेट",
    category: "pooja-samagri",
    subcategory: "hawan-samagri",
    description:
      "Convenient packet of Balaji hawan samagri, perfect for regular home hawan rituals. This economical pack contains a balanced mix of traditional herbs and aromatics that fill your home with sacred fragrance during hawan.",
    descriptionHindi:
      "बालाजी हवन सामग्री का सुविधाजनक पैकेट, नियमित घरेलू हवन के लिए उत्तम। इस किफायती पैक में पारंपरिक जड़ी-बूटियों और सुगंधित सामग्री का संतुलित मिश्रण है।",
    shortDescription: "Economical hawan samagri packet for daily home rituals.",
    ingredients:
      "Guggal, Loban, Camphor, Dried Herbs, Jatamansi, Nagarmotha, Kapoor Kachri",
    howToUse:
      "Light the sacred fire in a hawan kund. Add ghee and sprinkle hawan samagri into the fire while chanting mantras. Ideal for daily small-scale hawan at home.",
    price: 80,
    mrp: 100,
    discount: Math.round(((100 - 80) / 100) * 100),
    weight: "250g",
    images: ["/images/products/Hawan bala ji packet.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 27,
    tags: ["hawan", "samagri", "balaji", "havan", "yagya", "packet", "daily pooja"],
    festival: ["Navratri", "Diwali", "Dussehra"],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 3. Hawan Samagri Mysore Wood
  {
    id: "prod-003",
    slug: "hawan-samagri-mysore-wood",
    name: "Hawan Samagri Mysore Wood",
    nameHindi: "हवन सामग्री मैसूर लकड़ी",
    category: "pooja-samagri",
    subcategory: "hawan-samagri",
    description:
      "Exquisite hawan samagri blended with premium Mysore sandalwood chips. The rich aroma of Mysore wood elevates the hawan experience, creating a deeply spiritual and calming atmosphere in your home or temple.",
    descriptionHindi:
      "प्रीमियम मैसूर चंदन की लकड़ी के टुकड़ों से मिश्रित उत्कृष्ट हवन सामग्री। मैसूर लकड़ी की समृद्ध सुगंध हवन के अनुभव को ऊंचा करती है।",
    shortDescription: "Hawan samagri with premium Mysore sandalwood for an elevated ritual experience.",
    ingredients:
      "Mysore Sandalwood Chips, Guggal, Loban, Camphor, Dried Herbs, Jatamansi, Agar, Tagar",
    howToUse:
      "Light the sacred fire in a hawan kund. Add ghee and then add this premium hawan samagri. The Mysore wood burns slowly, releasing a divine sandalwood fragrance.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "200g",
    images: ["/images/products/Hawan maysoor wood.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 42,
    tags: ["hawan", "mysore", "sandalwood", "wood", "premium", "chandan", "pooja"],
    festival: ["Navratri", "Diwali", "Guru Purnima"],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 4. Vedang Hawan Samagri
  {
    id: "prod-004",
    slug: "vedang-hawan-samagri",
    name: "Vedang Hawan Samagri",
    nameHindi: "वेदांग हवन सामग्री",
    category: "pooja-samagri",
    subcategory: "hawan-samagri",
    description:
      "Vedang-grade hawan samagri prepared according to ancient Vedic scriptures. This premium blend contains rare herbs and roots that have been traditionally used in Vedic fire ceremonies for centuries, ensuring maximum spiritual benefit.",
    descriptionHindi:
      "प्राचीन वैदिक शास्त्रों के अनुसार तैयार वेदांग-ग्रेड हवन सामग्री। इस प्रीमियम मिश्रण में दुर्लभ जड़ी-बूटियाँ और जड़ें हैं जो सदियों से वैदिक अग्नि समारोहों में उपयोग की जाती हैं।",
    shortDescription: "Vedic-grade hawan samagri with rare herbs for authentic fire ceremonies.",
    ingredients:
      "36 Sacred Herbs including Guggal, Loban, Camphor, Jatamansi, Agar, Tagar, Nagarmotha, Kapoor Kachri, Brahmi, Shankhpushpi, Ashwagandha Root",
    howToUse:
      "Prepare the hawan kund with samidhaa. Light the fire with ghee. Offer this Vedang samagri with each mantra recitation. Recommended for special occasions and major Vedic rituals.",
    price: 200,
    mrp: 250,
    discount: Math.round(((250 - 200) / 250) * 100),
    weight: "500g",
    images: ["/images/products/Vedang hawan .jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 45,
    tags: ["vedang", "hawan", "vedic", "premium", "rare herbs", "yagya", "ritual"],
    festival: ["Navratri", "Diwali", "Makar Sankranti", "Guru Purnima", "Shivratri"],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 5. Samidhaa - Sacred Fire Wood
  {
    id: "prod-005",
    slug: "samidhaa-sacred-fire-wood",
    name: "Samidhaa - Sacred Fire Wood",
    nameHindi: "समिधा",
    category: "pooja-samagri",
    subcategory: "hawan-samagri",
    description:
      "Authentic samidhaa (sacred fire wood sticks) essential for performing hawan and yagya. These specially selected and cut wood sticks are from sacred trees and serve as the primary fuel for the hawan kund fire.",
    descriptionHindi:
      "हवन और यज्ञ करने के लिए आवश्यक प्रामाणिक समिधा (पवित्र अग्नि लकड़ी)। ये विशेष रूप से चयनित और कटी हुई लकड़ी की छड़ियाँ पवित्र वृक्षों से हैं।",
    shortDescription: "Sacred fire wood sticks essential for hawan and yagya rituals.",
    howToUse:
      "Arrange samidhaa sticks in the hawan kund in a criss-cross pattern. Apply ghee and light the fire. Add more sticks as needed to maintain the sacred fire throughout the ceremony.",
    price: 90,
    mrp: 110,
    discount: Math.round(((110 - 90) / 110) * 100),
    weight: "250g",
    images: ["/images/products/Samidhaa .jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 19,
    tags: ["samidhaa", "samidha", "fire wood", "hawan", "yagya", "kund", "sacred wood"],
    festival: ["Navratri", "Diwali", "Dussehra", "Makar Sankranti"],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    hsnCode: "4401",
  },

  // 6. Balaji Premium Dhoop
  {
    id: "prod-006",
    slug: "balaji-premium-dhoop",
    name: "Balaji Premium Dhoop",
    nameHindi: "बालाजी प्रीमियम धूप",
    category: "pooja-samagri",
    subcategory: "dhoop-agarbatti",
    description:
      "Balaji Premium Dhoop is crafted from natural ingredients for a rich, long-lasting fragrance during daily pooja. Each dhoop stick burns evenly and fills the room with a soothing sacred aroma that enhances your prayer experience.",
    descriptionHindi:
      "बालाजी प्रीमियम धूप प्राकृतिक सामग्री से बनाई गई है जो दैनिक पूजा के दौरान समृद्ध, लंबे समय तक चलने वाली सुगंध देती है। प्रत्येक धूप की बत्ती समान रूप से जलती है।",
    shortDescription: "Natural premium dhoop sticks for daily pooja and meditation.",
    ingredients: "Charcoal, Sandalwood Powder, Natural Resins, Aromatic Herbs, Guggal",
    howToUse:
      "Light the tip of the dhoop stick and let it burn for a few seconds. Blow out the flame and place in a dhoop holder. The aromatic smoke will fill your pooja room.",
    price: 60,
    mrp: 75,
    discount: Math.round(((75 - 60) / 75) * 100),
    weight: "100g",
    images: ["/images/products/Bala ji.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 22,
    tags: ["dhoop", "balaji", "incense", "agarbatti", "daily pooja", "fragrance"],
    festival: ["Diwali", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 7. Guggal Box 12 Pieces
  {
    id: "prod-007",
    slug: "guggal-box-12-pieces",
    name: "Guggal Box 12 Pieces",
    nameHindi: "गुग्गल बॉक्स 12 पीस",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "A value pack of 12 guggal pieces, ideal for temples, havans, and regular home use. Pure guggal resin produces thick, fragrant smoke that purifies the air and drives away negative energies according to Ayurvedic traditions.",
    descriptionHindi:
      "12 गुग्गल टुकड़ों का वैल्यू पैक, मंदिरों, हवनों और नियमित घरेलू उपयोग के लिए आदर्श। शुद्ध गुग्गल राल घना, सुगंधित धुआं पैदा करता है जो वायु को शुद्ध करता है।",
    shortDescription: "Value pack of 12 pure guggal pieces for hawan and dhoop.",
    ingredients: "100% Pure Guggal (Commiphora Mukul) Resin",
    howToUse:
      "Place a piece of guggal on hot charcoal or directly on the hawan fire. The resin will melt and release thick aromatic smoke. Can also be used in a dhoop burner.",
    price: 180,
    mrp: 220,
    discount: Math.round(((220 - 180) / 220) * 100),
    weight: "12 pcs",
    images: ["/images/products/Gugal box 12pcs.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 34,
    tags: ["guggal", "gugal", "loban", "dhoop", "resin", "purification", "temple"],
    festival: ["Diwali", "Navratri", "Shivratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "1301",
  },

  // 8. Guggal A-Grade Pure
  {
    id: "prod-008",
    slug: "guggal-a-grade-pure",
    name: "Guggal A-Grade Pure",
    nameHindi: "गुग्गल ए-ग्रेड शुद्ध",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "Highest quality A-grade guggal sourced directly from trusted suppliers. This premium resin has superior fragrance and purity, making it the preferred choice for temples and important religious ceremonies.",
    descriptionHindi:
      "विश्वसनीय आपूर्तिकर्ताओं से सीधे प्राप्त सर्वोच्च गुणवत्ता वाला ए-ग्रेड गुग्गल। इस प्रीमियम राल में बेहतर सुगंध और शुद्धता है।",
    shortDescription: "Premium A-grade pure guggal resin for temples and ceremonies.",
    ingredients: "100% Pure A-Grade Guggal (Commiphora Mukul) Resin",
    howToUse:
      "Burn on hot charcoal or add to hawan fire. A-grade guggal produces a purer, richer smoke. Ideal for temple aarti and special religious ceremonies.",
    price: 250,
    mrp: 300,
    discount: Math.round(((300 - 250) / 300) * 100),
    weight: "100g",
    images: ["/images/products/Gugal a grade.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 48,
    tags: ["guggal", "a-grade", "premium", "pure", "temple", "ceremony", "resin"],
    festival: ["Diwali", "Navratri", "Shivratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "1301",
  },

  // 9. Guggal Box Standard
  {
    id: "prod-009",
    slug: "guggal-box-standard",
    name: "Guggal Box Standard",
    nameHindi: "गुग्गल बॉक्स",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "Standard guggal box for everyday pooja needs. This reliable pack of pure guggal is perfect for daily dhoop and regular home worship. Burns steadily with a pleasant, traditional fragrance.",
    descriptionHindi:
      "रोज़मर्रा की पूजा की ज़रूरतों के लिए स्टैंडर्ड गुग्गल बॉक्स। शुद्ध गुग्गल का यह विश्वसनीय पैक दैनिक धूप और नियमित घरेलू पूजा के लिए उत्तम है।",
    shortDescription: "Reliable standard guggal box for daily pooja and dhoop rituals.",
    ingredients: "Pure Guggal (Commiphora Mukul) Resin",
    howToUse:
      "Place guggal on a dhoop burner or hot charcoal. Allow the resin to melt and produce aromatic smoke. Ideal for daily evening aarti.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "200g",
    images: ["/images/products/Gugal box.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 29,
    tags: ["guggal", "standard", "box", "dhoop", "daily pooja", "aarti"],
    festival: ["Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "1301",
  },

  // 10. Guggal Dhuni
  {
    id: "prod-010",
    slug: "guggal-dhuni",
    name: "Guggal Dhuni",
    nameHindi: "गुग्गल धुनी",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "Specially processed guggal designed for dhuni (traditional smoke purification). This form of guggal is easy to light and produces consistent, thick smoke ideal for purifying rooms, shops, and temples.",
    descriptionHindi:
      "धुनी (पारंपरिक धूम्र शोधन) के लिए विशेष रूप से संसाधित गुग्गल। गुग्गल का यह रूप आसानी से जलता है और कमरों, दुकानों और मंदिरों को शुद्ध करने के लिए लगातार गाढ़ा धुआं पैदा करता है।",
    shortDescription: "Processed guggal for dhuni smoke purification of spaces.",
    ingredients: "Processed Pure Guggal Resin",
    howToUse:
      "Light the guggal dhuni piece on a clay or metal burner. Walk through rooms with the smoking dhuni to purify the space. Traditionally done during evenings and special occasions.",
    price: 100,
    mrp: 120,
    discount: Math.round(((120 - 100) / 120) * 100),
    weight: "150g",
    images: ["/images/products/Gugal duni.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 18,
    tags: ["guggal", "dhuni", "purification", "smoke", "cleansing", "temple"],
    festival: ["Diwali", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "1301",
  },

  // 11. Guggal Small Pack
  {
    id: "prod-011",
    slug: "guggal-small-pack",
    name: "Guggal Small Pack",
    nameHindi: "गुग्गल छोटा पैक",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "A compact, affordable guggal pack perfect for those who need a small quantity for occasional pooja or want to try guggal dhoop. Pocket-friendly and convenient for travel or gifting.",
    descriptionHindi:
      "एक कॉम्पैक्ट, किफायती गुग्गल पैक जो कभी-कभार पूजा के लिए छोटी मात्रा चाहने वालों के लिए उत्तम है। जेब के अनुकूल और यात्रा या उपहार के लिए सुविधाजनक।",
    shortDescription: "Small affordable guggal pack, perfect for occasional use or gifting.",
    ingredients: "Pure Guggal (Commiphora Mukul) Resin",
    howToUse:
      "Burn on hot charcoal or in a dhoop burner. Even a small piece fills the room with divine fragrance.",
    price: 50,
    mrp: 65,
    discount: Math.round(((65 - 50) / 65) * 100),
    weight: "50g",
    images: ["/images/products/Gugal small.jpg"],
    inStock: true,
    rating: 4.2,
    reviewCount: 15,
    tags: ["guggal", "small", "mini", "travel", "affordable", "dhoop"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "1301",
  },

  // 12. Kodia Loban Premium
  {
    id: "prod-012",
    slug: "kodia-loban-premium",
    name: "Kodia Loban Premium",
    nameHindi: "कोड़िया लोबान प्रीमियम",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "Premium Kodia loban (benzoin resin) known for its sweet, warm fragrance. This high-quality loban is widely used in temples and homes for dhoop, creating a deeply meditative and spiritually uplifting atmosphere.",
    descriptionHindi:
      "प्रीमियम कोड़िया लोबान जो अपनी मीठी, गर्म सुगंध के लिए जानी जाती है। यह उच्च गुणवत्ता वाली लोबान मंदिरों और घरों में धूप के लिए व्यापक रूप से उपयोग की जाती है।",
    shortDescription: "Premium Kodia loban with a sweet, warm fragrance for pooja and meditation.",
    ingredients: "100% Pure Kodia Loban (Benzoin Resin)",
    howToUse:
      "Place on hot charcoal or add to hawan fire. Loban produces a sweet-smelling white smoke. Excellent for evening aarti and meditation.",
    price: 160,
    mrp: 200,
    discount: Math.round(((200 - 160) / 200) * 100),
    weight: "200g",
    images: ["/images/products/Kodia loban.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 36,
    tags: ["loban", "kodia", "benzoin", "resin", "dhoop", "meditation", "temple"],
    festival: ["Diwali", "Navratri", "Shivratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1301",
  },

  // 13. Color Loban Assorted
  {
    id: "prod-013",
    slug: "color-loban-assorted",
    name: "Color Loban Assorted",
    nameHindi: "रंगीन लोबान मिक्स",
    category: "pooja-samagri",
    subcategory: "guggal-loban",
    description:
      "An assorted pack of colored loban in multiple fragrances. Each color represents a different aromatic blend, making your dhoop experience diverse and vibrant. Popular in festive decorations and special pooja setups.",
    descriptionHindi:
      "कई सुगंधों में रंगीन लोबान का मिश्रित पैक। प्रत्येक रंग एक अलग सुगंधित मिश्रण का प्रतिनिधित्व करता है। त्योहारी सजावट और विशेष पूजा व्यवस्था में लोकप्रिय।",
    shortDescription: "Assorted colored loban with multiple fragrances for festive use.",
    ingredients: "Loban Resin, Natural Colors, Aromatic Essences",
    price: 140,
    mrp: 170,
    discount: Math.round(((170 - 140) / 170) * 100),
    weight: "200g",
    images: ["/images/products/Loban color.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 21,
    tags: ["loban", "color", "assorted", "fragrance", "festive", "dhoop"],
    festival: ["Diwali", "Navratri", "Holi"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1301",
  },

  // 14. Ganga Jal Big Bottle
  {
    id: "prod-014",
    slug: "ganga-jal-big-bottle",
    name: "Ganga Jal Big Bottle",
    nameHindi: "गंगा जल बड़ी बोतल",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Pure Ganga Jal (holy water from the River Ganges) in a large 500ml bottle. Essential for every Hindu household for daily pooja, abhishek, and purification rituals. Sourced directly from Haridwar.",
    descriptionHindi:
      "बड़ी 500ml बोतल में शुद्ध गंगा जल। प्रत्येक हिंदू घर में दैनिक पूजा, अभिषेक और शुद्धिकरण अनुष्ठानों के लिए आवश्यक। सीधे हरिद्वार से प्राप्त।",
    shortDescription: "Pure Ganga Jal from Haridwar in a large bottle for daily rituals.",
    howToUse:
      "Sprinkle Ganga Jal during pooja for purification. Use for abhishek of deities. Add a few drops to regular water for spiritual cleansing.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "500ml",
    images: ["/images/products/Ganga jal Big.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 50,
    tags: ["ganga jal", "holy water", "ganges", "purification", "abhishek", "haridwar"],
    festival: ["Ganga Dussehra", "Kartik Purnima", "Navratri", "Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "2201",
  },

  // 15. Gulab Jal Pure Rose Water
  {
    id: "prod-015",
    slug: "gulab-jal-pure-rose-water",
    name: "Gulab Jal Pure Rose Water",
    nameHindi: "गुलाब जल शुद्ध",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Pure and natural rose water (gulab jal) distilled from fresh roses. Used in pooja for sprinkling on deities, adding to prasad, and creating a fragrant atmosphere. Also used in cooking and skincare.",
    descriptionHindi:
      "ताज़े गुलाब से आसवित शुद्ध और प्राकृतिक गुलाब जल। पूजा में देवताओं पर छिड़कने, प्रसाद में डालने और सुगंधित वातावरण बनाने के लिए उपयोग किया जाता है।",
    shortDescription: "Pure distilled rose water for pooja, cooking, and skincare.",
    price: 90,
    mrp: 110,
    discount: Math.round(((110 - 90) / 110) * 100),
    weight: "200ml",
    images: ["/images/products/Gulab jal.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 32,
    tags: ["gulab jal", "rose water", "pooja", "fragrance", "cooking", "skincare"],
    festival: ["Janmashtami", "Diwali", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 16. Gulab Jal Premium Bottle
  {
    id: "prod-016",
    slug: "gulab-jal-premium-bottle",
    name: "Gulab Jal Premium Bottle",
    nameHindi: "गुलाब जल प्रीमियम बोतल",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Premium quality gulab jal in a large 500ml bottle, ideal for families and temples with regular use. This concentrated rose water has a stronger fragrance and is triple-distilled for maximum purity.",
    descriptionHindi:
      "बड़ी 500ml बोतल में प्रीमियम गुणवत्ता का गुलाब जल, नियमित उपयोग वाले परिवारों और मंदिरों के लिए आदर्श। यह सांद्र गुलाब जल तीन बार आसवित है।",
    shortDescription: "Large premium rose water bottle, triple-distilled for purity.",
    price: 130,
    mrp: 160,
    discount: Math.round(((160 - 130) / 160) * 100),
    weight: "500ml",
    images: ["/images/products/Gulab jal bottle.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 26,
    tags: ["gulab jal", "rose water", "premium", "large bottle", "pooja", "temple"],
    festival: ["Janmashtami", "Diwali", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 17. Gulab Jal 3-in-1 Pack
  {
    id: "prod-017",
    slug: "gulab-jal-3-in-1-pack",
    name: "Gulab Jal 3-in-1 Pack",
    nameHindi: "गुलाब जल 3-इन-1 पैक",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "A convenient 3-in-1 gulab jal pack containing three 200ml bottles. Perfect for sharing with family or keeping one at the temple, one in the kitchen, and one for personal care. Great value combo.",
    descriptionHindi:
      "तीन 200ml बोतलों वाला सुविधाजनक 3-इन-1 गुलाब जल पैक। परिवार के साथ साझा करने या मंदिर, रसोई और व्यक्तिगत देखभाल के लिए एक-एक रखने के लिए उत्तम।",
    shortDescription: "Value pack of 3 rose water bottles for multiple uses.",
    price: 250,
    mrp: 300,
    discount: Math.round(((300 - 250) / 300) * 100),
    weight: "3x200ml",
    images: ["/images/products/Gulab jab 3in 1.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 17,
    tags: ["gulab jal", "rose water", "combo", "3-in-1", "value pack", "family pack"],
    festival: ["Diwali", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 18. Kewra Water
  {
    id: "prod-018",
    slug: "kewra-water",
    name: "Kewra Water",
    nameHindi: "केवड़ा जल",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Pure kewra (screwpine) water with a distinctive sweet floral aroma. Widely used in pooja rituals, cooking sweets and biryanis, and as a natural room freshener. A staple in Indian households.",
    descriptionHindi:
      "विशिष्ट मीठी पुष्प सुगंध वाला शुद्ध केवड़ा जल। पूजा अनुष्ठानों, मिठाई और बिरयानी बनाने और प्राकृतिक रूम फ्रेशनर के रूप में व्यापक रूप से उपयोग किया जाता है।",
    shortDescription: "Natural kewra water for pooja, cooking, and aromatic use.",
    price: 80,
    mrp: 100,
    discount: Math.round(((100 - 80) / 100) * 100),
    weight: "200ml",
    images: ["/images/products/Kewra water.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 14,
    tags: ["kewra", "screwpine", "floral water", "cooking", "pooja", "fragrance"],
    festival: ["Eid", "Diwali", "Janmashtami"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 19. Kewra Water Big Bottle
  {
    id: "prod-019",
    slug: "kewra-water-big-bottle",
    name: "Kewra Water Big Bottle",
    nameHindi: "केवड़ा जल बड़ी बोतल",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Large 500ml bottle of pure kewra water for families and commercial kitchens. The bigger size offers better value for regular users who incorporate kewra water in their daily cooking and pooja routines.",
    descriptionHindi:
      "परिवारों और व्यावसायिक रसोई के लिए शुद्ध केवड़ा जल की बड़ी 500ml बोतल। बड़ा आकार नियमित उपयोगकर्ताओं के लिए बेहतर मूल्य प्रदान करता है।",
    shortDescription: "Large 500ml kewra water bottle for regular cooking and pooja use.",
    price: 140,
    mrp: 170,
    discount: Math.round(((170 - 140) / 170) * 100),
    weight: "500ml",
    images: ["/images/products/Kewra water big.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 11,
    tags: ["kewra", "screwpine", "big bottle", "cooking", "pooja", "value"],
    festival: ["Eid", "Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 20. 27 Kua Jal Sacred Water
  {
    id: "prod-020",
    slug: "27-kua-jal-sacred-water",
    name: "27 Kua Jal Sacred Water",
    nameHindi: "27 कुआं जल",
    category: "pooja-samagri",
    subcategory: "sacred-water",
    description:
      "Rare and sacred 27 Kua Jal, water collected from 27 different holy wells. This spiritually significant water is used in special rituals, grih pravesh ceremonies, and important pujas for maximum auspiciousness.",
    descriptionHindi:
      "दुर्लभ और पवित्र 27 कुआं जल, 27 विभिन्न पवित्र कुओं से एकत्रित जल। यह आध्यात्मिक रूप से महत्वपूर्ण जल विशेष अनुष्ठानों, गृह प्रवेश और महत्वपूर्ण पूजाओं में उपयोग किया जाता है।",
    shortDescription: "Sacred water from 27 holy wells for special rituals and ceremonies.",
    howToUse:
      "Use during grih pravesh, special pujas, and important ceremonies. Sprinkle in all rooms for purification. Add to kalash water during Navratri and other festivals.",
    price: 110,
    mrp: 140,
    discount: Math.round(((140 - 110) / 140) * 100),
    weight: "200ml",
    images: ["/images/products/27kua jal.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 23,
    tags: ["27 kua", "sacred water", "holy wells", "grih pravesh", "purification", "ritual"],
    festival: ["Navratri", "Diwali", "Grih Pravesh"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "2201",
  },

  // 21. Chandan Dust 12 Pieces
  {
    id: "prod-021",
    slug: "chandan-dust-12-pieces",
    name: "Chandan Dust 12 Pieces",
    nameHindi: "चंदन धूल 12 पीस",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "A box of 12 chandan (sandalwood) dust packets for tilak and pooja use. Each packet contains finely ground sandalwood powder that can be mixed with water to create a smooth tilak paste for daily worship.",
    descriptionHindi:
      "तिलक और पूजा उपयोग के लिए 12 चंदन धूल पैकेट का बॉक्स। प्रत्येक पैकेट में बारीक पिसा हुआ चंदन पाउडर है जिसे पानी में मिलाकर दैनिक पूजा के लिए चिकना तिलक पेस्ट बनाया जा सकता है।",
    shortDescription: "12 packets of fine sandalwood dust for tilak preparation.",
    ingredients: "Pure Sandalwood Dust",
    howToUse:
      "Mix a small quantity of chandan dust with water on a stone or plate to create a smooth paste. Apply as tilak on forehead during pooja.",
    price: 160,
    mrp: 200,
    discount: Math.round(((200 - 160) / 200) * 100),
    weight: "12 pcs",
    images: ["/images/products/Chandan dust 12pcs.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 28,
    tags: ["chandan", "sandalwood", "tilak", "dust", "powder", "pooja", "12 pieces"],
    festival: ["Janmashtami", "Ganesh Chaturthi", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 22. Chandan Tika Yellow
  {
    id: "prod-022",
    slug: "chandan-tika-yellow",
    name: "Chandan Tika Yellow",
    nameHindi: "चंदन टीका पीला",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Ready-to-use yellow chandan tika paste for daily pooja and temple visits. This traditional sandalwood paste has a cooling effect and a beautiful golden yellow color, symbolizing auspiciousness and devotion.",
    descriptionHindi:
      "दैनिक पूजा और मंदिर दर्शन के लिए उपयोग-तैयार पीला चंदन टीका पेस्ट। इस पारंपरिक चंदन पेस्ट का शीतलन प्रभाव है और सुंदर सुनहरा पीला रंग शुभता का प्रतीक है।",
    shortDescription: "Ready-to-use yellow chandan tilak paste for daily pooja.",
    ingredients: "Yellow Sandalwood Paste, Turmeric, Water",
    howToUse:
      "Apply directly on the forehead with your ring finger as a tilak mark during pooja. Can also be applied on deities. Store in a cool place.",
    price: 70,
    mrp: 90,
    discount: Math.round(((90 - 70) / 90) * 100),
    weight: "50g",
    images: ["/images/products/Chandan tika pila.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 20,
    tags: ["chandan", "tilak", "yellow", "paste", "daily pooja", "sandalwood"],
    festival: ["Janmashtami", "Diwali", "Ganesh Chaturthi"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 23. Pila Chandan Tilak
  {
    id: "prod-023",
    slug: "pila-chandan-tilak",
    name: "Pila Chandan Tilak",
    nameHindi: "पीला चंदन तिलक",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Traditional pila (yellow) chandan tilak in a compact 40g pack. This affordable chandan tilak is perfect for daily use and carries the authentic fragrance of pure sandalwood blended with natural turmeric.",
    descriptionHindi:
      "40g के कॉम्पैक्ट पैक में पारंपरिक पीला चंदन तिलक। यह किफायती चंदन तिलक दैनिक उपयोग के लिए उत्तम है और शुद्ध चंदन की प्रामाणिक सुगंध देता है।",
    shortDescription: "Affordable yellow chandan tilak for everyday worship.",
    ingredients: "Sandalwood Paste, Natural Turmeric, Rosewater",
    howToUse:
      "Take a small amount on your finger and apply on the forehead as a tilak. Apply after bath during morning pooja for best results.",
    price: 60,
    mrp: 80,
    discount: Math.round(((80 - 60) / 80) * 100),
    weight: "40g",
    images: ["/images/products/Pila chandan tilak.jpg"],
    inStock: true,
    rating: 4.2,
    reviewCount: 16,
    tags: ["chandan", "tilak", "pila", "yellow", "affordable", "daily"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 24. White Chandan Tika
  {
    id: "prod-024",
    slug: "white-chandan-tika",
    name: "White Chandan Tika",
    nameHindi: "सफेद चंदन टीका",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Pure white sandalwood (chandan) tilak paste, preferred in Vaishnav traditions. This cooling white paste is made from premium white sandalwood and is ideal for applying U-shaped tilak marks and deity decoration.",
    descriptionHindi:
      "शुद्ध सफेद चंदन टीका पेस्ट, वैष्णव परंपराओं में पसंदीदा। यह शीतल सफेद पेस्ट प्रीमियम सफेद चंदन से बना है और U-आकार के तिलक और देवता सजावट के लिए आदर्श है।",
    shortDescription: "Pure white sandalwood tilak for Vaishnav traditions and deity decoration.",
    ingredients: "Pure White Sandalwood Paste, Water",
    howToUse:
      "Apply with ring finger on the forehead as a straight line or U-shape tilak as per your tradition. Also used for decorating deity idols.",
    price: 80,
    mrp: 100,
    discount: Math.round(((100 - 80) / 100) * 100),
    weight: "50g",
    images: ["/images/products/White chandan tika.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 25,
    tags: ["chandan", "white", "tilak", "vaishnav", "sandalwood", "deity"],
    festival: ["Janmashtami", "Ram Navami", "Tulsi Vivah"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 25. Lal Chandan Tika Red
  {
    id: "prod-025",
    slug: "lal-chandan-tika-red",
    name: "Lal Chandan Tika Red",
    nameHindi: "लाल चंदन टीका",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Red sandalwood (lal chandan) tilak paste, traditionally used in Hanuman pooja and Mangal (Tuesday) rituals. The vibrant red color signifies strength and devotion, making it essential for Bajrangbali worship.",
    descriptionHindi:
      "लाल चंदन टीका पेस्ट, पारंपरिक रूप से हनुमान पूजा और मंगलवार के अनुष्ठानों में उपयोग किया जाता है। चमकीला लाल रंग शक्ति और भक्ति का प्रतीक है।",
    shortDescription: "Red chandan tilak for Hanuman pooja and Tuesday rituals.",
    ingredients: "Red Sandalwood (Pterocarpus Santalinus) Paste, Water",
    howToUse:
      "Apply on the forehead during Hanuman pooja and on Tuesdays and Saturdays. Also used for applying tilak on Hanuman Ji idol.",
    price: 75,
    mrp: 95,
    discount: Math.round(((95 - 75) / 95) * 100),
    weight: "50g",
    images: ["/images/products/Lal chandan tika.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 30,
    tags: ["lal chandan", "red", "tilak", "hanuman", "tuesday", "mangal", "bajrangbali"],
    festival: ["Hanuman Jayanti", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 26. Mysore Chandan 12 Dozen Mini
  {
    id: "prod-026",
    slug: "mysore-chandan-12-dozen-mini",
    name: "Mysore Chandan 12 Dozen Mini",
    nameHindi: "मैसूर चंदन 12 दर्जन मिनी",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Bulk pack of 12 dozen mini Mysore chandan sticks, ideal for temples, ashrams, and wholesale buyers. Authentic Mysore sandalwood known for its unparalleled fragrance. Rub on a wet stone to create premium tilak paste.",
    descriptionHindi:
      "12 दर्जन मिनी मैसूर चंदन स्टिक का थोक पैक, मंदिरों, आश्रमों और थोक खरीदारों के लिए आदर्श। अपनी अद्वितीय सुगंध के लिए प्रसिद्ध प्रामाणिक मैसूर चंदन।",
    shortDescription: "Bulk 12 dozen mini Mysore sandalwood sticks for temples and wholesale.",
    ingredients: "100% Mysore Sandalwood (Santalum Album)",
    howToUse:
      "Rub the chandan stick on a wet sandalwood stone in circular motions to create a smooth paste. Use the paste for tilak and deity decoration.",
    price: 350,
    mrp: 420,
    discount: Math.round(((420 - 350) / 420) * 100),
    weight: "12 dozen",
    images: ["/images/products/Chnadan mysore 12 doz min.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 40,
    tags: ["mysore", "chandan", "sandalwood", "bulk", "temple", "wholesale", "mini sticks"],
    festival: ["Janmashtami", "Ganesh Chaturthi", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 27. Chandan Powder Malyagiri Bag
  {
    id: "prod-027",
    slug: "chandan-powder-malyagiri-bag",
    name: "Chandan Powder Malyagiri Bag",
    nameHindi: "चंदन पाउडर मल्यागिरी बैग",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Premium Malyagiri sandalwood powder in a convenient bag pack. Malyagiri chandan is renowned for its rich, long-lasting fragrance and is considered among the finest sandalwood varieties for tilak and pooja use.",
    descriptionHindi:
      "सुविधाजनक बैग पैक में प्रीमियम मल्यागिरी चंदन पाउडर। मल्यागिरी चंदन अपनी समृद्ध, लंबे समय तक चलने वाली सुगंध के लिए प्रसिद्ध है।",
    shortDescription: "Premium Malyagiri sandalwood powder in a bag for tilak and pooja.",
    ingredients: "100% Pure Malyagiri Sandalwood Powder",
    howToUse:
      "Mix with water or rose water to create a smooth tilak paste. Can also be added to hawan samagri or used in face packs for a natural glow.",
    price: 200,
    mrp: 250,
    discount: Math.round(((250 - 200) / 250) * 100),
    weight: "100g",
    images: ["/images/products/Chnadan powder malyagiri bag.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 33,
    tags: ["chandan", "malyagiri", "powder", "sandalwood", "tilak", "premium"],
    festival: ["Janmashtami", "Ganesh Chaturthi"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 28. Malyagiri Sandalwood Powder
  {
    id: "prod-028",
    slug: "malyagiri-sandalwood-powder",
    name: "Malyagiri Sandalwood Powder",
    nameHindi: "मल्यागिरी चंदन पाउडर",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Fine-grade Malyagiri sandalwood powder in a 50g pack, perfect for personal use. This aromatic powder creates an excellent tilak paste and can also be used as a natural face pack for glowing skin.",
    descriptionHindi:
      "50g पैक में फाइन-ग्रेड मल्यागिरी चंदन पाउडर, व्यक्तिगत उपयोग के लिए उत्तम। यह सुगंधित पाउडर उत्कृष्ट तिलक पेस्ट बनाता है और प्राकृतिक फेस पैक के रूप में भी उपयोग किया जा सकता है।",
    shortDescription: "Fine Malyagiri sandalwood powder for tilak and beauty use.",
    ingredients: "100% Pure Fine-Ground Malyagiri Sandalwood",
    howToUse:
      "For tilak: Mix with water and apply. For face pack: Mix with rose water and apply on face for 15 minutes, then wash off.",
    price: 180,
    mrp: 220,
    discount: Math.round(((220 - 180) / 220) * 100),
    weight: "50g",
    images: ["/images/products/MAlyagiri sandal powder.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 24,
    tags: ["malyagiri", "sandalwood", "powder", "tilak", "face pack", "beauty"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 29. Malyagiri Chandan Powder Premium
  {
    id: "prod-029",
    slug: "malyagiri-chandan-powder-premium",
    name: "Malyagiri Chandan Powder Premium",
    nameHindi: "मल्यागिरी चंदन पाउडर प्रीमियम",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "The finest premium-grade Malyagiri chandan powder available, sourced from old-growth sandalwood trees. This ultra-fine powder has an exceptionally rich fragrance that lasts for hours after application.",
    descriptionHindi:
      "उपलब्ध सबसे बेहतरीन प्रीमियम-ग्रेड मल्यागिरी चंदन पाउडर, पुराने चंदन के पेड़ों से प्राप्त। इस अल्ट्रा-फाइन पाउडर में असाधारण समृद्ध सुगंध है जो लगाने के बाद घंटों तक रहती है।",
    shortDescription: "Ultra-premium Malyagiri chandan powder with exceptional fragrance.",
    ingredients: "100% Pure Premium-Grade Malyagiri Sandalwood",
    price: 220,
    mrp: 270,
    discount: Math.round(((270 - 220) / 270) * 100),
    weight: "100g",
    images: ["/images/products/Malyagiri chandan powder.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 37,
    tags: ["malyagiri", "chandan", "premium", "ultra-fine", "sandalwood", "luxury"],
    festival: ["Janmashtami", "Ganesh Chaturthi", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 30. Malyagiri Powder Pack
  {
    id: "prod-030",
    slug: "malyagiri-powder-pack",
    name: "Malyagiri Powder Pack",
    nameHindi: "मल्यागिरी पाउडर पैक",
    category: "pooja-samagri",
    subcategory: "chandan-tilak",
    description:
      "Economical Malyagiri powder pack for regular sandalwood users. This 50g pack provides pure Malyagiri chandan powder at an accessible price point, making daily sandalwood tilak affordable for everyone.",
    descriptionHindi:
      "नियमित चंदन उपयोगकर्ताओं के लिए किफायती मल्यागिरी पाउडर पैक। यह 50g पैक सुलभ कीमत पर शुद्ध मल्यागिरी चंदन पाउडर प्रदान करता है।",
    shortDescription: "Affordable Malyagiri sandalwood powder pack for regular use.",
    ingredients: "Pure Malyagiri Sandalwood Powder",
    price: 150,
    mrp: 190,
    discount: Math.round(((190 - 150) / 190) * 100),
    weight: "50g",
    images: ["/images/products/Malyagiri powder pack.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 19,
    tags: ["malyagiri", "powder", "affordable", "sandalwood", "daily tilak"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 31. Kumkum Packet Pure
  {
    id: "prod-031",
    slug: "kumkum-packet-pure",
    name: "Kumkum Packet Pure",
    nameHindi: "कुमकुम पैकेट शुद्ध",
    category: "pooja-samagri",
    subcategory: "sindoor-kumkum",
    description:
      "Pure kumkum powder packet for daily pooja and tilak application. This vibrant red kumkum is made from natural ingredients and is an essential item for Hindu worship, deity decoration, and applying the sacred bindi.",
    descriptionHindi:
      "दैनिक पूजा और तिलक लगाने के लिए शुद्ध कुमकुम पाउडर पैकेट। यह चमकीला लाल कुमकुम प्राकृतिक सामग्री से बना है और हिंदू पूजा, देवता सजावट के लिए आवश्यक वस्तु है।",
    shortDescription: "Pure natural kumkum powder for pooja and tilak.",
    ingredients: "Turmeric, Lime, Natural Red Dye",
    price: 40,
    mrp: 50,
    discount: Math.round(((50 - 40) / 50) * 100),
    weight: "50g",
    images: ["/images/products/kum kum packet.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 35,
    tags: ["kumkum", "sindoor", "tilak", "pooja", "bindi", "red powder"],
    festival: ["Navratri", "Diwali", "Karwa Chauth", "Ganesh Chaturthi"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3304",
  },

  // 32. Red Powder Sindoor
  {
    id: "prod-032",
    slug: "red-powder-sindoor",
    name: "Red Powder Sindoor",
    nameHindi: "लाल पाउडर सिंदूर",
    category: "pooja-samagri",
    subcategory: "sindoor-kumkum",
    description:
      "Traditional red sindoor powder for religious and cultural use. This fine, vibrant red powder is used for applying sindoor in the maang (hair parting), deity decoration, and making auspicious marks during rituals.",
    descriptionHindi:
      "धार्मिक और सांस्कृतिक उपयोग के लिए पारंपरिक लाल सिंदूर पाउडर। यह बारीक, चमकीला लाल पाउडर मांग में सिंदूर लगाने, देवता सजावट और शुभ चिह्न बनाने के लिए उपयोग किया जाता है।",
    shortDescription: "Traditional red sindoor powder for rituals and cultural use.",
    ingredients: "Natural Red Pigment, Turmeric Base",
    price: 45,
    mrp: 55,
    discount: Math.round(((55 - 45) / 55) * 100),
    weight: "50g",
    images: ["/images/products/Red Powder.jpg"],
    inStock: true,
    rating: 4.2,
    reviewCount: 18,
    tags: ["sindoor", "red powder", "maang", "pooja", "tilak", "married women"],
    festival: ["Karwa Chauth", "Navratri", "Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3304",
  },

  // 33. Kalash Powder
  {
    id: "prod-033",
    slug: "kalash-powder",
    name: "Kalash Powder",
    nameHindi: "कलश पाउडर",
    category: "pooja-samagri",
    subcategory: "sindoor-kumkum",
    description:
      "Specialized kalash powder used for decorating the sacred kalash (pot) during pooja and festivals. This vermillion-colored powder is applied on kalash, swastik marks, and other auspicious symbols during rituals.",
    descriptionHindi:
      "पूजा और त्योहारों के दौरान पवित्र कलश को सजाने के लिए विशेष कलश पाउडर। यह सिंदूरी रंग का पाउडर कलश, स्वस्तिक चिह्न और अन्य शुभ प्रतीकों पर लगाया जाता है।",
    shortDescription: "Decorative kalash powder for sacred pot decoration in pooja.",
    price: 60,
    mrp: 75,
    discount: Math.round(((75 - 60) / 75) * 100),
    weight: "100g",
    images: ["/images/products/Kalash Powder.jpg"],
    inStock: true,
    rating: 4.1,
    reviewCount: 12,
    tags: ["kalash", "powder", "decoration", "pooja", "swastik", "vermillion"],
    festival: ["Navratri", "Diwali", "Ganesh Chaturthi"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3304",
  },

  // 34. Bhojpatra Sacred Bark
  {
    id: "prod-034",
    slug: "bhojpatra-sacred-bark",
    name: "Bhojpatra Sacred Bark",
    nameHindi: "भोजपत्र",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Authentic Bhojpatra (Himalayan birch bark) used for writing mantras, yantras, and sacred texts. In Hindu tradition, writing mantras on Bhojpatra and keeping them in temples or wallets brings divine blessings and protection.",
    descriptionHindi:
      "मंत्र, यंत्र और पवित्र ग्रंथ लिखने के लिए प्रामाणिक भोजपत्र (हिमालयी भोज वृक्ष की छाल)। हिंदू परंपरा में भोजपत्र पर मंत्र लिखकर मंदिर या बटुए में रखने से दिव्य आशीर्वाद मिलता है।",
    shortDescription: "Authentic Himalayan Bhojpatra for writing mantras and yantras.",
    howToUse:
      "Write desired mantras or yantras on the Bhojpatra using ashtagandha ink or red sandalwood paste. Keep in your pooja room, temple, or wallet for blessings.",
    price: 150,
    mrp: 180,
    discount: Math.round(((180 - 150) / 180) * 100),
    weight: "assorted",
    images: ["/images/products/Bhojpatra all.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 22,
    tags: ["bhojpatra", "birch bark", "mantra", "yantra", "sacred", "himalayan", "protection"],
    festival: ["Navratri", "Diwali", "Basant Panchami"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1401",
  },

  // 35. Janeu Sacred Thread Big
  {
    id: "prod-035",
    slug: "janeu-sacred-thread-big",
    name: "Janeu Sacred Thread Big",
    nameHindi: "जनेऊ बड़ा",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Large-size sacred Janeu (Yagyopavit) thread worn during Upanayana ceremony and daily rituals. Made from pure cotton with traditional knots, this Janeu is essential for performing Vedic rituals and daily sandhyavandana.",
    descriptionHindi:
      "उपनयन संस्कार और दैनिक अनुष्ठानों के दौरान पहना जाने वाला बड़े आकार का पवित्र जनेऊ (यज्ञोपवीत)। शुद्ध सूती धागे से पारंपरिक गांठों के साथ बना।",
    shortDescription: "Large sacred Janeu thread for Upanayana and daily rituals.",
    howToUse:
      "Wear across the left shoulder and under the right arm. Replace during major festivals and after attending specific ceremonies as per tradition.",
    price: 50,
    mrp: 65,
    discount: Math.round(((65 - 50) / 65) * 100),
    weight: "1 pc",
    images: ["/images/products/Janeu Big.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 15,
    tags: ["janeu", "sacred thread", "yagyopavit", "upanayana", "ritual", "cotton"],
    festival: ["Janeu Purnima", "Raksha Bandhan", "Shravana"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "5607",
  },

  // 36. Janeu Sacred Thread Small
  {
    id: "prod-036",
    slug: "janeu-sacred-thread-small",
    name: "Janeu Sacred Thread Small",
    nameHindi: "जनेऊ छोटा",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Compact-size Janeu (sacred thread) for children and young boys undergoing Upanayana. Made from pure cotton with the traditional three-strand design symbolizing the three Vedas and three debts.",
    descriptionHindi:
      "उपनयन संस्कार करने वाले बच्चों और युवा लड़कों के लिए कॉम्पैक्ट-साइज़ जनेऊ। तीन वेदों और तीन ऋणों का प्रतीक पारंपरिक तीन-तार डिज़ाइन के साथ शुद्ध सूती से बना।",
    shortDescription: "Small Janeu sacred thread for children and young boys.",
    price: 30,
    mrp: 40,
    discount: Math.round(((40 - 30) / 40) * 100),
    weight: "1 pc",
    images: ["/images/products/Janeu small.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 10,
    tags: ["janeu", "sacred thread", "small", "children", "upanayana"],
    festival: ["Janeu Purnima", "Raksha Bandhan"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "5607",
  },

  // 37. Kush Dandi Sacred Grass
  {
    id: "prod-037",
    slug: "kush-dandi-sacred-grass",
    name: "Kush Dandi Sacred Grass",
    nameHindi: "कुश दंडी",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Sacred Kusha grass (Desmostachya bipinnata) used in Hindu rituals, particularly during Shraddh, Tarpan, and Pind Daan ceremonies. Kusha grass is considered highly purifying and is worn on the ring finger during rituals.",
    descriptionHindi:
      "हिंदू अनुष्ठानों में, विशेष रूप से श्राद्ध, तर्पण और पिंड दान समारोहों में उपयोग होने वाली पवित्र कुश घास। कुश को अत्यंत शुद्ध माना जाता है।",
    shortDescription: "Sacred Kusha grass for Shraddh, Tarpan, and purification rituals.",
    howToUse:
      "Make a ring from kusha grass and wear on the ring finger during rituals. Also spread under the pooja mat for sitting during ceremonies. Essential during Pitru Paksha.",
    price: 80,
    mrp: 100,
    discount: Math.round(((100 - 80) / 100) * 100),
    weight: "bundle",
    images: ["/images/products/Kush dandi.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 20,
    tags: ["kusha", "kush", "sacred grass", "shraddh", "tarpan", "pind daan", "pitru"],
    festival: ["Pitru Paksha", "Amavasya", "Shraddh"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1401",
  },

  // 38. Gaumutra Pure Cow Urine
  {
    id: "prod-038",
    slug: "gaumutra-pure-cow-urine",
    name: "Gaumutra Pure Cow Urine",
    nameHindi: "गौमूत्र शुद्ध",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Pure and filtered Gaumutra (cow urine) from indigenous Indian cow breeds. An essential component of Panchgavya and widely used in Hindu purification rituals, grih shanti, and Ayurvedic practices.",
    descriptionHindi:
      "देसी भारतीय गाय नस्लों से शुद्ध और छना हुआ गौमूत्र। पंचगव्य का आवश्यक घटक और हिंदू शुद्धिकरण अनुष्ठानों, गृह शांति और आयुर्वेदिक प्रथाओं में व्यापक रूप से उपयोग किया जाता है।",
    shortDescription: "Pure filtered Gaumutra for Panchgavya and purification rituals.",
    howToUse:
      "Sprinkle in rooms and around the home for purification. Mix with other Panchgavya ingredients for rituals. Use as directed by your pandit for specific ceremonies.",
    price: 70,
    mrp: 90,
    discount: Math.round(((90 - 70) / 90) * 100),
    weight: "200ml",
    images: ["/images/products/Gaumutra .jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 16,
    tags: ["gaumutra", "cow urine", "panchgavya", "purification", "ayurveda", "desi cow"],
    festival: ["Gopashtami", "Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "0510",
  },

  // 39. Pure Honey for Pooja
  {
    id: "prod-039",
    slug: "pure-honey-for-pooja",
    name: "Pure Honey for Pooja",
    nameHindi: "शुद्ध शहद पूजा हेतु",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "100% pure and unprocessed honey specifically sourced for pooja rituals. Honey is a key ingredient in Panchamrit and Abhishek, and this bottle ensures you have the purest offering for your deities.",
    descriptionHindi:
      "विशेष रूप से पूजा अनुष्ठानों के लिए प्राप्त 100% शुद्ध और असंसाधित शहद। शहद पंचामृत और अभिषेक में एक प्रमुख सामग्री है।",
    shortDescription: "Pure unprocessed honey for Panchamrit and Abhishek rituals.",
    howToUse:
      "Use in preparing Panchamrit by mixing with milk, curd, sugar, and ghee. Also used directly in Abhishek of deities. Offer as bhog to deities.",
    price: 150,
    mrp: 180,
    discount: Math.round(((180 - 150) / 180) * 100),
    weight: "250g",
    images: ["/images/products/Honey .jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 27,
    tags: ["honey", "shahad", "panchamrit", "abhishek", "pure", "natural", "offering"],
    festival: ["Janmashtami", "Shivratri", "Navratri"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "0409",
  },

  // 40. Ashtagandha Paste
  {
    id: "prod-040",
    slug: "ashtagandha-paste",
    name: "Ashtagandha Paste",
    nameHindi: "अष्टगंध",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Traditional Ashtagandha paste made from eight sacred fragrant ingredients. Used for applying tilak, writing on Bhojpatra, and offering to deities. This sacred paste has been used in Hindu rituals for thousands of years.",
    descriptionHindi:
      "आठ पवित्र सुगंधित सामग्रियों से बना पारंपरिक अष्टगंध पेस्ट। तिलक लगाने, भोजपत्र पर लिखने और देवताओं को अर्पित करने के लिए उपयोग किया जाता है।",
    shortDescription: "Sacred 8-ingredient Ashtagandha paste for tilak and ritual writing.",
    ingredients:
      "Sandalwood, Agar, Tagar, Kumkum, Gorochan, Jatamansi, Kesar (Saffron), Camphor",
    howToUse:
      "Apply as tilak on the forehead during pooja. Use for writing mantras on Bhojpatra. Apply on deity idols during special worship.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "50g",
    images: ["/images/products/Asthgandh.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 31,
    tags: ["ashtagandha", "8 gandh", "tilak", "paste", "sacred", "mantra", "bhojpatra"],
    festival: ["Navratri", "Diwali", "Shivratri", "Ram Navami"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 41. Kashi Bhasma Sacred Ash
  {
    id: "prod-041",
    slug: "kashi-bhasma-sacred-ash",
    name: "Kashi Bhasma Sacred Ash",
    nameHindi: "काशी भस्म",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Sacred Bhasma (vibhuti/ash) from Kashi (Varanasi), the holy city of Lord Shiva. This pure white ash is applied on the forehead in three horizontal lines by Shaivites and is an essential element in Shiva worship.",
    descriptionHindi:
      "भगवान शिव की पवित्र नगरी काशी (वाराणसी) से पवित्र भस्म (विभूति)। यह शुद्ध सफेद राख शैवों द्वारा माथे पर तीन क्षैतिज रेखाओं में लगाई जाती है।",
    shortDescription: "Sacred Bhasma from Kashi for Shiva worship and Shaivite tilak.",
    ingredients: "Sacred Ash (Vibhuti) from Kashi",
    howToUse:
      "Apply three horizontal lines on the forehead using the three middle fingers. Also applied on arms, chest, and other parts of the body during Shiva pooja.",
    price: 90,
    mrp: 110,
    discount: Math.round(((110 - 90) / 110) * 100),
    weight: "100g",
    images: ["/images/products/Kashi bashm .jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 23,
    tags: ["bhasma", "vibhuti", "kashi", "varanasi", "shiva", "ash", "shaivite"],
    festival: ["Shivratri", "Sawan", "Kartik Purnima"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3307",
  },

  // 42. Mutha Bada Nagarmotha
  {
    id: "prod-042",
    slug: "mutha-bada-nagarmotha",
    name: "Mutha Bada Nagarmotha",
    nameHindi: "मुथा बड़ा",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Large-sized Nagarmotha (Cyperus rotundus) roots, a key ingredient in hawan samagri and Ayurvedic preparations. Known for its earthy, medicinal aroma, Nagarmotha is burned during hawan for air purification.",
    descriptionHindi:
      "बड़े आकार की नागरमोथा (मुस्तक) जड़ें, हवन सामग्री और आयुर्वेदिक तैयारियों में एक प्रमुख सामग्री। अपनी मिट्टी जैसी, औषधीय सुगंध के लिए जानी जाती है।",
    shortDescription: "Nagarmotha roots for hawan samagri and Ayurvedic preparations.",
    ingredients: "100% Natural Nagarmotha (Cyperus Rotundus) Roots",
    price: 100,
    mrp: 125,
    discount: Math.round(((125 - 100) / 125) * 100),
    weight: "100g",
    images: ["/images/products/Mutha bada.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 13,
    tags: ["nagarmotha", "mutha", "roots", "hawan", "ayurveda", "purification"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 43. Agar Tagar
  {
    id: "prod-043",
    slug: "agar-tagar",
    name: "Agar Tagar",
    nameHindi: "अगर तगर",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "A blend of Agar (Aquilaria) and Tagar (Valerian) used extensively in hawan and pooja. These aromatic wood chips and roots release a deeply calming fragrance when burned, ideal for meditation and spiritual practices.",
    descriptionHindi:
      "हवन और पूजा में व्यापक रूप से उपयोग होने वाला अगर (अगरु) और तगर (वेलेरियन) का मिश्रण। जलाने पर ये सुगंधित लकड़ी के टुकड़े और जड़ें गहरी शांत करने वाली सुगंध छोड़ते हैं।",
    shortDescription: "Agar and Tagar blend for hawan, meditation, and spiritual practices.",
    ingredients: "Agar (Aquilaria) Wood Chips, Tagar (Valerian) Roots",
    howToUse:
      "Add to hawan fire along with ghee and other samagri. Can also be burned separately on charcoal for a meditative fragrance in your pooja room.",
    price: 130,
    mrp: 160,
    discount: Math.round(((160 - 130) / 160) * 100),
    weight: "100g",
    images: ["/images/products/Agar_Tagar.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 25,
    tags: ["agar", "tagar", "hawan", "meditation", "aromatic", "calming", "wood chips"],
    festival: ["Shivratri", "Navratri", "Guru Purnima"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 44. Agar Wood Premium Box
  {
    id: "prod-044",
    slug: "agar-wood-premium-box",
    name: "Agar Wood Premium Box",
    nameHindi: "अगर वुड प्रीमियम बॉक्स",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Premium Agar wood (Oudh/Agarwood) chips in an elegant box, one of the most prized aromatic woods in the world. When burned, Agar wood releases an extraordinarily rich, complex fragrance cherished in both spiritual and luxury contexts.",
    descriptionHindi:
      "एक सुंदर बॉक्स में प्रीमियम अगर लकड़ी (ऊद) के टुकड़े, दुनिया की सबसे बेशकीमती सुगंधित लकड़ियों में से एक। जलाने पर यह असाधारण रूप से समृद्ध, जटिल सुगंध छोड़ती है।",
    shortDescription: "Premium Agar wood (Oudh) chips for luxurious fragrance and rituals.",
    ingredients: "100% Premium Agarwood (Aquilaria) Chips",
    howToUse:
      "Place a small piece on hot charcoal or an electric burner. The wood will slowly release its luxurious fragrance. A little goes a long way.",
    price: 300,
    mrp: 380,
    discount: Math.round(((380 - 300) / 380) * 100),
    weight: "50g",
    images: ["/images/products/Agar Wood Box.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 44,
    tags: ["agar wood", "oudh", "agarwood", "premium", "luxury", "aromatic", "rare"],
    festival: ["Diwali", "Eid"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 45. Tagar Lakdi Box
  {
    id: "prod-045",
    slug: "tagar-lakdi-box",
    name: "Tagar Lakdi Box",
    nameHindi: "तगर लकड़ी बॉक्स",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Tagar (Indian Valerian) wood pieces packed in a box. Tagar is a highly valued aromatic root used in hawan and pooja for its calming, stress-relieving fragrance. Also used in traditional Ayurvedic preparations.",
    descriptionHindi:
      "बॉक्स में पैक तगर (इंडियन वेलेरियन) लकड़ी के टुकड़े। तगर एक अत्यधिक मूल्यवान सुगंधित जड़ है जो हवन और पूजा में शांत, तनाव-मुक्त करने वाली सुगंध के लिए उपयोग की जाती है।",
    shortDescription: "Tagar (Valerian) wood pieces for hawan and calming aromatherapy.",
    ingredients: "100% Natural Tagar (Valeriana Wallichii) Wood",
    price: 110,
    mrp: 140,
    discount: Math.round(((140 - 110) / 140) * 100),
    weight: "100g",
    images: ["/images/products/Tagar lakdi box.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 17,
    tags: ["tagar", "valerian", "wood", "hawan", "calming", "ayurveda", "aromatic"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "1211",
  },

  // 46. 5 Ratan Pooja Set
  {
    id: "prod-046",
    slug: "5-ratan-pooja-set",
    name: "5 Ratan Pooja Set",
    nameHindi: "5 रत्न पूजा सेट",
    category: "pooja-samagri",
    subcategory: "pooja-sets",
    description:
      "A complete 5 Ratan (five jewels) pooja set containing five sacred items used together in special worship. This set is essential for Lakshmi pooja, prosperity rituals, and is especially popular during Diwali and Dhanteras.",
    descriptionHindi:
      "विशेष पूजा में एक साथ उपयोग की जाने वाली पांच पवित्र वस्तुओं वाला पूर्ण 5 रत्न पूजा सेट। यह सेट लक्ष्मी पूजा और समृद्धि अनुष्ठानों के लिए आवश्यक है।",
    shortDescription: "Complete 5 Ratan set for Lakshmi pooja and prosperity rituals.",
    howToUse:
      "Place all five items near the deity during Lakshmi pooja. Follow the guidance of your pandit for the specific placement and mantra for each ratan.",
    price: 200,
    mrp: 250,
    discount: Math.round(((250 - 200) / 250) * 100),
    weight: "1 set",
    images: ["/images/products/5 ratan.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 35,
    tags: ["5 ratan", "five jewels", "lakshmi", "prosperity", "diwali", "pooja set"],
    festival: ["Diwali", "Dhanteras", "Navratri", "Akshaya Tritiya"],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    hsnCode: "7117",
  },

  // 47. 56 Bhog Offering Set
  {
    id: "prod-047",
    slug: "56-bhog-offering-set",
    name: "56 Bhog Offering Set",
    nameHindi: "56 भोग प्रसाद सेट",
    category: "pooja-samagri",
    subcategory: "pooja-sets",
    description:
      "A curated 56 Bhog offering set containing ingredients and items needed for the traditional Chhappan Bhog offering to Lord Krishna. This sacred offering is a highlight of Janmashtami and Annakut celebrations.",
    descriptionHindi:
      "भगवान कृष्ण को पारंपरिक छप्पन भोग अर्पित करने के लिए आवश्यक सामग्री और वस्तुओं वाला क्यूरेटेड 56 भोग सेट। यह पवित्र भोग जन्माष्टमी और अन्नकूट का मुख्य आकर्षण है।",
    shortDescription: "Complete 56 Bhog set for Krishna pooja and Annakut celebrations.",
    howToUse:
      "Prepare the 56 varieties of food offerings using the included ingredients. Arrange beautifully before the Krishna deity. Offer with devotion during Janmashtami or Annakut.",
    price: 350,
    mrp: 420,
    discount: Math.round(((420 - 350) / 420) * 100),
    weight: "1 set",
    images: ["/images/products/56 bhog (1).jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
    tags: ["56 bhog", "chhappan bhog", "krishna", "janmashtami", "annakut", "offering"],
    festival: ["Janmashtami", "Annakut", "Govardhan Pooja", "Diwali"],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    hsnCode: "2106",
  },

  // 48. Ubtan Natural Face Pack
  {
    id: "prod-048",
    slug: "ubtan-natural-face-pack",
    name: "Ubtan Natural Face Pack",
    nameHindi: "उबटन",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "Traditional ubtan made from natural ingredients like turmeric, sandalwood, gram flour, and rose petals. Used in wedding ceremonies (haldi) and as a natural beauty treatment. Also offered to deities during shringar pooja.",
    descriptionHindi:
      "हल्दी, चंदन, बेसन और गुलाब की पंखुड़ियों जैसी प्राकृतिक सामग्रियों से बना पारंपरिक उबटन। शादी समारोहों (हल्दी) और प्राकृतिक सौंदर्य उपचार में उपयोग किया जाता है।",
    shortDescription: "Traditional ubtan for wedding ceremonies and natural beauty care.",
    ingredients:
      "Gram Flour, Turmeric, Sandalwood Powder, Rose Petals, Milk Powder, Saffron",
    howToUse:
      "Mix with milk or rose water to make a paste. Apply on face and body. Leave for 15-20 minutes until semi-dry, then scrub off gently. For wedding haldi, apply generously.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "100g",
    images: ["/images/products/Ubtan .jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 29,
    tags: ["ubtan", "haldi", "wedding", "beauty", "face pack", "natural", "turmeric"],
    festival: ["Wedding Season", "Karwa Chauth", "Navratri"],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    hsnCode: "3304",
  },

  // 49. Ubtan Gift Box
  {
    id: "prod-049",
    slug: "ubtan-gift-box",
    name: "Ubtan Gift Box",
    nameHindi: "उबटन गिफ्ट बॉक्स",
    category: "pooja-samagri",
    subcategory: "pooja-essentials",
    description:
      "A beautifully packaged ubtan gift box, perfect for weddings, bridal showers, and festive gifting. Contains a generous 200g of premium ubtan with extra ingredients for a luxurious beauty ritual.",
    descriptionHindi:
      "खूबसूरती से पैक किया गया उबटन गिफ्ट बॉक्स, शादियों, ब्राइडल शावर और त्योहारी उपहार के लिए उत्तम। शानदार सौंदर्य अनुष्ठान के लिए अतिरिक्त सामग्री के साथ 200g प्रीमियम उबटन शामिल है।",
    shortDescription: "Premium ubtan in a gift box for weddings and festive gifting.",
    ingredients:
      "Premium Gram Flour, Kashmiri Turmeric, Mysore Sandalwood, Organic Rose Petals, Pure Milk Powder, Kashmir Saffron, Almond Powder",
    howToUse:
      "Mix with raw milk or rose water. Apply evenly on face and body. Allow to semi-dry for 15-20 minutes, then gently scrub in circular motions and wash off.",
    price: 180,
    mrp: 220,
    discount: Math.round(((220 - 180) / 220) * 100),
    weight: "200g",
    images: ["/images/products/Ubtan Box.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 24,
    tags: ["ubtan", "gift box", "wedding", "bridal", "premium", "beauty", "gifting"],
    festival: ["Wedding Season", "Karwa Chauth", "Diwali"],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    hsnCode: "3304",
  },

  // ============================================================
  // PERFUMES & ATTARS (50-63)
  // ============================================================

  // 50. Attar 12 Pcs Box Collection
  {
    id: "prod-050",
    slug: "attar-12-pcs-box-collection",
    name: "Attar 12 Pcs Box Collection",
    nameHindi: "अत्तर 12 पीस बॉक्स",
    category: "perfumes-attars",
    subcategory: "attar-collections",
    description:
      "An exquisite collection of 12 different attars in a premium gift box. Each miniature bottle contains a unique traditional fragrance, making it perfect for personal use, gifting, or discovering your favorite attar.",
    descriptionHindi:
      "प्रीमियम गिफ्ट बॉक्स में 12 विभिन्न अत्तरों का उत्कृष्ट संग्रह। प्रत्येक लघु बोतल में एक अनूठी पारंपरिक सुगंध है। व्यक्तिगत उपयोग या उपहार के लिए उत्तम।",
    shortDescription: "Gift box collection of 12 unique traditional attars.",
    price: 500,
    mrp: 600,
    discount: Math.round(((600 - 500) / 600) * 100),
    weight: "12 pcs",
    images: ["/images/products/Attar 12 pcs box .jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 46,
    tags: ["attar", "collection", "gift box", "12 pcs", "traditional", "fragrance", "perfume"],
    festival: ["Eid", "Diwali", "Wedding Season"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "3303",
  },

  // 51. Attar 24 Pcs Box Collection
  {
    id: "prod-051",
    slug: "attar-24-pcs-box-collection",
    name: "Attar 24 Pcs Box Collection",
    nameHindi: "अत्तर 24 पीस बॉक्स",
    category: "perfumes-attars",
    subcategory: "attar-collections",
    description:
      "The ultimate attar collection featuring 24 different fragrances in an elegant presentation box. This comprehensive set covers the full range of traditional Indian attars from floral to woody, musky to sweet.",
    descriptionHindi:
      "एक शानदार प्रेजेंटेशन बॉक्स में 24 विभिन्न सुगंधों वाला अंतिम अत्तर संग्रह। यह व्यापक सेट पुष्प से लेकर लकड़ी, कस्तूरी से लेकर मीठी तक पारंपरिक भारतीय अत्तरों की पूरी श्रृंखला को कवर करता है।",
    shortDescription: "Premium 24-piece attar collection with the full range of Indian fragrances.",
    price: 900,
    mrp: 1100,
    discount: Math.round(((1100 - 900) / 1100) * 100),
    weight: "24 pcs",
    images: ["/images/products/Attar box 24pcs.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 39,
    tags: ["attar", "24 pcs", "collection", "premium", "gift", "complete set", "luxury"],
    festival: ["Eid", "Diwali", "Wedding Season"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "3303",
  },

  // 52. Attar 8 Pcs Box
  {
    id: "prod-052",
    slug: "attar-8-pcs-box",
    name: "Attar 8 Pcs Box",
    nameHindi: "अत्तर 8 पीस बॉक्स",
    category: "perfumes-attars",
    subcategory: "attar-collections",
    description:
      "A compact collection of 8 popular attars in a neat gift box. Curated with the most-loved fragrances, this set is an ideal introduction to the world of traditional Indian attars and makes a thoughtful gift.",
    descriptionHindi:
      "एक साफ गिफ्ट बॉक्स में 8 लोकप्रिय अत्तरों का कॉम्पैक्ट संग्रह। सबसे पसंदीदा सुगंधों के साथ क्यूरेटेड, यह सेट पारंपरिक भारतीय अत्तरों की दुनिया का आदर्श परिचय है।",
    shortDescription: "Curated 8-piece attar box set with popular fragrances.",
    price: 350,
    mrp: 420,
    discount: Math.round(((420 - 350) / 420) * 100),
    weight: "8 pcs",
    images: ["/images/products/Attar box 8pcs.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 28,
    tags: ["attar", "8 pcs", "gift box", "curated", "popular", "starter set"],
    festival: ["Eid", "Diwali"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "3303",
  },

  // 53. Attar Alshan Premium
  {
    id: "prod-053",
    slug: "attar-alshan-premium",
    name: "Attar Alshan Premium",
    nameHindi: "अत्तर अलशां प्रीमियम",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "Premium Alshan attar with a rich, long-lasting oriental fragrance. This luxurious attar has deep musky notes with hints of floral and wood, making it perfect for special occasions and evening wear.",
    descriptionHindi:
      "समृद्ध, लंबे समय तक चलने वाली ओरिएंटल सुगंध वाला प्रीमियम अलशां अत्तर। इस शानदार अत्तर में गहरी कस्तूरी सुगंध है जो विशेष अवसरों के लिए उत्तम है।",
    shortDescription: "Premium Alshan attar with a rich oriental fragrance for special occasions.",
    price: 180,
    mrp: 220,
    discount: Math.round(((220 - 180) / 220) * 100),
    weight: "10ml",
    images: ["/images/products/Attar Alshan.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 33,
    tags: ["attar", "alshan", "premium", "oriental", "musky", "long lasting", "evening"],
    festival: ["Eid", "Wedding Season"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "3303",
  },

  // 54. Attar Kesar Chandan
  {
    id: "prod-054",
    slug: "attar-kesar-chandan",
    name: "Attar Kesar Chandan",
    nameHindi: "अत्तर केसर चंदन",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "A divine blend of saffron (kesar) and sandalwood (chandan) in a traditional attar form. This iconic Indian fragrance combines the warm richness of saffron with the smooth creaminess of sandalwood for a truly regal scent.",
    descriptionHindi:
      "पारंपरिक अत्तर रूप में केसर और चंदन का दिव्य मिश्रण। यह प्रतिष्ठित भारतीय सुगंध केसर की गर्म समृद्धि को चंदन की चिकनी मलाईदार सुगंध के साथ जोड़ती है।",
    shortDescription: "Traditional Kesar-Chandan attar with a warm, regal fragrance.",
    price: 200,
    mrp: 250,
    discount: Math.round(((250 - 200) / 250) * 100),
    weight: "10ml",
    images: ["/images/products/Attar keshar chandan.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 43,
    tags: ["attar", "kesar", "chandan", "saffron", "sandalwood", "traditional", "regal"],
    festival: ["Eid", "Diwali", "Janmashtami", "Wedding Season"],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    hsnCode: "3303",
  },

  // 55. Attar Kewra Gulab Mix
  {
    id: "prod-055",
    slug: "attar-kewra-gulab-mix",
    name: "Attar Kewra Gulab Mix",
    nameHindi: "अत्तर केवड़ा गुलाब मिक्स",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "A refreshing mix of kewra (screwpine) and gulab (rose) attars, creating a unique floral bouquet. This light, uplifting fragrance is perfect for daytime wear and brings a sense of freshness and joy.",
    descriptionHindi:
      "केवड़ा और गुलाब अत्तरों का ताजगी भरा मिश्रण, एक अनूठा पुष्प गुलदस्ता बनाता है। यह हल्की, उत्साहवर्धक सुगंध दिन के समय पहनने के लिए उत्तम है।",
    shortDescription: "Refreshing Kewra-Gulab attar mix for a floral daytime fragrance.",
    price: 170,
    mrp: 210,
    discount: Math.round(((210 - 170) / 210) * 100),
    weight: "10ml",
    images: ["/images/products/Attar kewra gulab mix.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 22,
    tags: ["attar", "kewra", "gulab", "rose", "floral", "mix", "daytime", "refreshing"],
    festival: ["Eid", "Valentine's Day"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 56. Attar Mix Bag Bottle
  {
    id: "prod-056",
    slug: "attar-mix-bag-bottle",
    name: "Attar Mix Bag Bottle",
    nameHindi: "अत्तर मिक्स बैग बोतल",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "A mixed attar blend in a handy bag-style bottle, perfect for carrying in your pocket or purse. This versatile fragrance combines multiple attar notes for an all-occasion scent that appeals to everyone.",
    descriptionHindi:
      "एक सुविधाजनक बैग-स्टाइल बोतल में मिश्रित अत्तर, जेब या पर्स में ले जाने के लिए उत्तम। यह बहुमुखी सुगंध कई अत्तर नोट्स को मिलाती है।",
    shortDescription: "Convenient mixed attar in a portable bag bottle for everyday use.",
    price: 150,
    mrp: 190,
    discount: Math.round(((190 - 150) / 190) * 100),
    weight: "10ml",
    images: ["/images/products/Attar mix Bag bottle.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 16,
    tags: ["attar", "mix", "bag bottle", "portable", "everyday", "all-occasion"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 57. Attar Mix Box Bottle Big
  {
    id: "prod-057",
    slug: "attar-mix-box-bottle-big",
    name: "Attar Mix Box Bottle Big",
    nameHindi: "अत्तर मिक्स बॉक्स बोतल बड़ी",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "A large 25ml bottle of mixed attar in an attractive box, offering great value for regular attar users. This generous size lasts much longer and the premium blend makes it suitable for both daily and special use.",
    descriptionHindi:
      "आकर्षक बॉक्स में मिश्रित अत्तर की बड़ी 25ml बोतल, नियमित अत्तर उपयोगकर्ताओं के लिए शानदार मूल्य। यह उदार आकार बहुत लंबे समय तक चलता है।",
    shortDescription: "Large 25ml mixed attar bottle in a gift box for great value.",
    price: 250,
    mrp: 300,
    discount: Math.round(((300 - 250) / 300) * 100),
    weight: "25ml",
    images: ["/images/products/Attar mix Box Bottle big.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 20,
    tags: ["attar", "mix", "big bottle", "25ml", "value", "gift box", "premium blend"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 58. Chameli Mini Bottle
  {
    id: "prod-058",
    slug: "chameli-mini-bottle",
    name: "Chameli Mini Bottle",
    nameHindi: "चमेली मिनी बोतल",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "Pure chameli (jasmine) attar in a cute mini bottle. The intoxicating fragrance of jasmine has been treasured in Indian perfumery for centuries and is associated with romance, devotion, and spiritual awakening.",
    descriptionHindi:
      "प्यारी मिनी बोतल में शुद्ध चमेली अत्तर। चमेली की मादक सुगंध सदियों से भारतीय इत्र कला में पोषित रही है और रोमांस, भक्ति और आध्यात्मिक जागृति से जुड़ी है।",
    shortDescription: "Pure jasmine attar in a mini bottle with an intoxicating floral scent.",
    price: 120,
    mrp: 150,
    discount: Math.round(((150 - 120) / 150) * 100),
    weight: "10ml",
    images: ["/images/products/Chameli min bottle.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 26,
    tags: ["chameli", "jasmine", "mini", "floral", "romantic", "traditional", "attar"],
    festival: ["Valentine's Day", "Wedding Season"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 59. Chameli Oil Mix
  {
    id: "prod-059",
    slug: "chameli-oil-mix",
    name: "Chameli Oil Mix",
    nameHindi: "चमेली ऑयल मिक्स",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "A fragrant blend of chameli (jasmine) oil mixed with other complementary floral oils. This versatile oil can be used as a perfume, in oil diffusers, for hair care, or added to your bath for a luxurious floral experience.",
    descriptionHindi:
      "चमेली तेल का अन्य पूरक पुष्प तेलों के साथ सुगंधित मिश्रण। इस बहुमुखी तेल का उपयोग इत्र, ऑयल डिफ्यूज़र, बालों की देखभाल या स्नान में किया जा सकता है।",
    shortDescription: "Versatile chameli oil blend for perfume, diffuser, and hair care use.",
    price: 160,
    mrp: 200,
    discount: Math.round(((200 - 160) / 200) * 100),
    weight: "25ml",
    images: ["/images/products/Chameli oli mix.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 19,
    tags: ["chameli", "jasmine", "oil", "mix", "hair care", "diffuser", "floral", "bath oil"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3301",
  },

  // 60. Magic Scent Box Collection
  {
    id: "prod-060",
    slug: "magic-scent-box-collection",
    name: "Magic Scent Box Collection",
    nameHindi: "मैजिक सेंट बॉक्स कलेक्शन",
    category: "perfumes-attars",
    subcategory: "scent-collections",
    description:
      "An enchanting collection of 6 unique scents in a magical presentation box. Each bottle holds a distinct fragrance that captivates the senses, from fresh and light to deep and mysterious. Perfect for gifting.",
    descriptionHindi:
      "एक जादुई प्रेजेंटेशन बॉक्स में 6 अनूठी सुगंधों का मंत्रमुग्ध करने वाला संग्रह। प्रत्येक बोतल में ताज़ा और हल्की से लेकर गहरी और रहस्यमय तक एक विशिष्ट सुगंध है।",
    shortDescription: "Enchanting 6-piece scent collection in a magical gift box.",
    price: 280,
    mrp: 350,
    discount: Math.round(((350 - 280) / 350) * 100),
    weight: "6 pcs",
    images: ["/images/products/Magic sent box.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 30,
    tags: ["magic scent", "collection", "6 pcs", "gift box", "fragrance", "unique", "premium"],
    festival: ["Diwali", "Eid", "Wedding Season", "Birthday"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 61. Scent Mix Assorted
  {
    id: "prod-061",
    slug: "scent-mix-assorted",
    name: "Scent Mix Assorted",
    nameHindi: "सेंट मिक्स असॉर्टेड",
    category: "perfumes-attars",
    subcategory: "scent-collections",
    description:
      "An assorted pack of 6 mixed scents offering a variety of fragrances at an affordable price. This sampler set lets you explore different scent profiles and find the ones that suit your personality best.",
    descriptionHindi:
      "किफायती कीमत पर विभिन्न सुगंधों की पेशकश करने वाला 6 मिश्रित सेंट का असॉर्टेड पैक। यह सैंपलर सेट आपको विभिन्न सुगंध प्रोफाइल का पता लगाने देता है।",
    shortDescription: "Assorted 6-piece scent sampler pack at an affordable price.",
    price: 220,
    mrp: 270,
    discount: Math.round(((270 - 220) / 270) * 100),
    weight: "6 pcs",
    images: ["/images/products/Scent mix.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 18,
    tags: ["scent", "mix", "assorted", "sampler", "affordable", "variety", "fragrance"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 62. Mix 12 Dozen Injection Bottle Box
  {
    id: "prod-062",
    slug: "mix-12-dozen-injection-bottle-box",
    name: "Mix 12 Dozen Injection Bottle Box",
    nameHindi: "मिक्स 12 दर्जन इंजेक्शन बोतल बॉक्स",
    category: "perfumes-attars",
    subcategory: "wholesale-attars",
    description:
      "Wholesale box of 12 dozen (144 pieces) mixed attar injection bottles, ideal for retailers and shop owners. Each bottle contains a different fragrance in the popular injection bottle format that customers love.",
    descriptionHindi:
      "खुदरा विक्रेताओं और दुकान मालिकों के लिए 12 दर्जन (144 पीस) मिश्रित अत्तर इंजेक्शन बोतलों का थोक बॉक्स। प्रत्येक बोतल में लोकप्रिय इंजेक्शन बोतल प्रारूप में एक अलग सुगंध है।",
    shortDescription: "Wholesale 12 dozen injection attar bottles for retailers.",
    price: 600,
    mrp: 750,
    discount: Math.round(((750 - 600) / 750) * 100),
    weight: "12 dozen",
    images: ["/images/products/Mix 12 doz injection box.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 14,
    tags: ["wholesale", "injection bottle", "12 dozen", "bulk", "retailer", "attar", "mix"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },

  // 63. Singh Brand Injection Attar
  {
    id: "prod-063",
    slug: "singh-brand-injection-attar",
    name: "Singh Brand Injection Attar",
    nameHindi: "सिंह ब्रांड इंजेक्शन अत्तर",
    category: "perfumes-attars",
    subcategory: "individual-attars",
    description:
      "The signature Singh Brand attar in a trendy injection bottle format. This house-brand attar features a distinctive, long-lasting fragrance that has become a customer favorite. The unique bottle design makes it a conversation starter.",
    descriptionHindi:
      "ट्रेंडी इंजेक्शन बोतल प्रारूप में सिग्नेचर सिंह ब्रांड अत्तर। इस हाउस-ब्रांड अत्तर में एक विशिष्ट, लंबे समय तक चलने वाली सुगंध है जो ग्राहकों की पसंदीदा बन गई है।",
    shortDescription: "Signature Singh Brand attar in a trendy injection bottle.",
    price: 180,
    mrp: 220,
    discount: Math.round(((220 - 180) / 220) * 100),
    weight: "10ml",
    images: ["/images/products/Singh brand Injection.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 21,
    tags: ["singh brand", "injection", "attar", "signature", "house brand", "trendy", "long lasting"],
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    hsnCode: "3303",
  },
];

// ============================================================
// CATEGORIES
// ============================================================

export const categories: Category[] = [
  {
    id: "pooja-samagri",
    name: "Pooja Samagri",
    nameHindi: "पूजा सामग्री",
    description: "Complete range of pure and authentic pooja essentials",
    image: "/images/categories/pooja-samagri.jpg",
    productCount: 49,
  },
  {
    id: "perfumes-attars",
    name: "Perfumes & Attars",
    nameHindi: "इत्र और अत्तर",
    description: "Traditional attars and fragrances",
    image: "/images/categories/perfumes-attars.jpg",
    productCount: 14,
  },
  {
    id: "curated-kits",
    name: "Curated Pooja Kits",
    nameHindi: "पूजा किट",
    description: "Festival-ready complete pooja kits",
    image: "/images/categories/curated-kits.jpg",
    productCount: 0,
  },
  {
    id: "combo-offers",
    name: "Combo Offers",
    nameHindi: "कॉम्बो ऑफर",
    description: "Save more with our value combos",
    image: "/images/categories/combo-offers.jpg",
    productCount: 0,
  },
  {
    id: "temple-bulk",
    name: "Temple & Bulk Orders",
    nameHindi: "मंदिर और थोक ऑर्डर",
    description: "Wholesale pricing for temples and bulk buyers",
    image: "/images/categories/temple-bulk.jpg",
    productCount: 0,
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.nameHindi.includes(query) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      p.subcategory.toLowerCase().includes(lowerQuery) ||
      (p.festival && p.festival.some((f) => f.toLowerCase().includes(lowerQuery)))
  );
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.subcategory === product.subcategory)
    )
    .sort((a, b) => {
      // Prioritize same subcategory
      const aSubMatch = a.subcategory === product.subcategory ? 1 : 0;
      const bSubMatch = b.subcategory === product.subcategory ? 1 : 0;
      if (bSubMatch !== aSubMatch) return bSubMatch - aSubMatch;
      // Then by rating
      return b.rating - a.rating;
    })
    .slice(0, limit);
}
