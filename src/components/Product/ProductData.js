const productData = [
  {
    id: 1,
    pname: "zara",
    product: "slim casual shirt",
    filter: "men",
    imgscr:
      "https://static.zara.net/photos///2022/I/0/2/p/5625/178/250/2/w/1288/5625178250_2_1_1.jpg?ts=1655826914772",
    img2: "https://static.zara.net/photos///2022/I/0/2/p/5625/178/250/2/w/3024/5625178250_1_1_1.jpg?ts=1655826955029",
    img3: "https://static.zara.net/photos///2022/I/0/2/p/5625/178/250/2/w/324/5625178250_2_4_1.jpg?ts=1655826916671",
    img4: "https://static.zara.net/photos///2022/I/0/2/p/5625/178/250/2/w/324/5625178250_6_1_1.jpg?ts=1655798291586",
    price: "Rs. 669",
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 2,
    pname: "H&M",
    product: "checked casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/18/5a62f888-9fec-4a69-9302-7e53da944d7e1602977907978-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/18/06353bfa-6bf0-49ee-b3ad-d5f4181fa36b1602977908022-2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/18/daaf8fec-475a-4695-82e0-9b108307bcf81602977908066-3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/18/cc3a08e9-5aac-48a7-bdb3-b5961f75d6a71602977908151-5.jpg",
    price: "Rs. 1374",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 3,
    pname: "zara",
    product: "slim fat casual shirt",
    filter: "men",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677344/2022/8/26/947bc724-83d6-49d7-9782-981f76b1317c1661504622624OversizedFitShort-sleevedOxfordshirt1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677344/2022/8/26/5564e44f-d171-4f5c-a446-c83efc8594a21661504622616OversizedFitShort-sleevedOxfordshirt2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677344/2022/8/26/67413ff5-5f24-4afb-9c30-5ea97afe15b61661504622651OversizedFitShort-sleevedOxfordshirt3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677344/2022/8/26/10ba4810-81dd-4fb0-a6e0-f62ba1492e631661504622642OversizedFitShort-sleevedOxfordshirt4.jpg",
    price: "Rs. 719",
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 4,
    pname: "zara",
    product: "slim fit casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18257634/2022/5/26/11b2bf58-ce2d-48b6-9fb5-e87d509342611653544278025MANGOWomenPurpleCasualShirtShirtsMANGOMANMenShirtsMANGOMANMe1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18257634/2022/5/26/f523df8a-5ec7-45a8-82df-46537bddb3b41653544278037MANGOWomenPurpleCasualShirtShirtsMANGOMANMenShirtsMANGOMANMe2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18257634/2022/5/26/541b288e-32b7-4973-9aeb-d616c58013b01653544278060MANGOWomenPurpleCasualShirtShirtsMANGOMANMenShirtsMANGOMANMe4.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18257634/2022/5/26/3d3d19dc-a2ab-43bf-8e0b-f7f942b624741653544278048MANGOWomenPurpleCasualShirtShirtsMANGOMANMenShirtsMANGOMANMe3.jpg",
    price: "Rs. 699",
    recommendation: 1,
    discount: 20,
    bestseller: 1,
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 5,
    pname: "us polo",
    product: "oversized cotton shirt",
    filter: "men",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677340/2022/8/26/04a23b4b-33a6-4367-980b-40394e7ffc081661500609147OversizedFitShort-sleevedOxfordshirt1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677340/2022/8/26/379043dd-4552-484f-877e-e5418d1349441661500609138OversizedFitShort-sleevedOxfordshirt2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677340/2022/8/26/71c8304b-0b5e-411b-8554-fe8303709fd51661500609173OversizedFitShort-sleevedOxfordshirt3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19677340/2022/8/26/382f71d6-7ee9-4e59-ac08-5a3c01946eae1661500609157OversizedFitShort-sleevedOxfordshirt5.jpg",
    price: "Rs. 999",
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 6,
    pname: "zara",
    product: "dobby sheer boxy shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19174994/2022/7/19/237c6bb8-1df7-484f-9dc0-c330b078b0311658249931204Oversizedlinenshirt1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19174994/2022/7/19/01fbc797-4f1b-4f8a-8207-bcd9edfc36c71658249931223Oversizedlinenshirt2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19174994/2022/7/19/3a60d5a7-96f2-4574-80bf-febd22a4f2641658249931214Oversizedlinenshirt3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19174994/2022/7/19/d95765e7-4b9b-4367-8fd7-ff2b298b8d9a1658249931231Oversizedlinenshirt4.jpg",
    price: "Rs. 684",
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 7,
    pname: "us polo",
    product: "semi-sheer casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13722908/2021/3/3/d1ee19bd-73c9-4ca4-a8e9-624c18128a6e1614752690702-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13722908/2021/3/3/09ac901e-ae97-4044-96f4-eed025414fb71614752690645-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-4.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13722908/2021/3/3/f86a0624-a4fd-497e-b37a-79f24bc1c9c51614752690682-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-2.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13722908/2021/3/3/830e96fd-e533-4add-805f-85b2c95a24bd1614752690611-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-6.jpg",
    price: "Rs. 599",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 8,
    pname: "zara",
    product: "solid casual shirt",
    filter: "men",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15088746/2022/2/25/0023be06-daf1-47d9-9c41-9c867754ad521645785145961-Kook-N-Keech-Men-Shirts-151645785145221-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15088746/2022/2/25/f9bd36e8-f228-4515-8569-0db460db15a91645785145934-Kook-N-Keech-Men-Shirts-151645785145221-4.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15088746/2022/2/25/cc6fbcfd-0ed6-4b78-9744-74e07a7a57241645785145924-Kook-N-Keech-Men-Shirts-151645785145221-5.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15088746/2022/2/25/b7bb18c2-1e9d-4d11-bf22-c0f088e36d661645785145915-Kook-N-Keech-Men-Shirts-151645785145221-6.jpg",
    price: "Rs. 555",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 9,
    pname: "H&M",
    product: "regular fit casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19312236/2022/8/8/8f721c09-c24c-45f4-8b96-43ef5be271be1659933936777ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19312236/2022/8/8/0c1e4d7d-312c-4c17-92a9-19a03079d1e91659933936785ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19312236/2022/8/8/c287c8dc-ca01-43c9-afa7-2dbdf73927821659933936796ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19312236/2022/8/8/8f721c09-c24c-45f4-8b96-43ef5be271be1659933936777ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ1.jpg",
    price: "Rs. 1459",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 10,
    pname: "H&M",
    product: "check hooded casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17392760/2022/3/29/6864a499-febd-4d0c-a99f-76a3b9582d9f1648555596026-plusS-Women-Shirts-6321648555595552-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17392760/2022/3/29/bf1ff157-535f-4a67-922c-e31f1b13cdb11648555596005-plusS-Women-Shirts-6321648555595552-2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17392760/2022/3/29/1e4e7970-09c4-467a-9203-4ad1a87906771648555595982-plusS-Women-Shirts-6321648555595552-3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17392760/2022/3/29/4e2d1eaa-147b-4a19-ad65-07ec25babcb21648555595961-plusS-Women-Shirts-6321648555595552-4.jpg",
    price: "Rs. 599",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 11,
    pname: "puma",
    product: "boys casual shirt",
    filter: "men",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19818626/2022/9/6/58f05554-c9c1-4de8-8214-6965a0a9d5771662465111841Shirts1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19818626/2022/9/6/cc54cece-15aa-4b4c-b88a-283e4fe387d21662465111877Shirts2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19818626/2022/9/6/9658f533-aa8c-4ba2-91b2-05b609bb37dc1662465111849Shirts3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19818626/2022/9/6/fe9da01a-075d-44cf-8c2e-ced07ce074bb1662465111831Shirts4.jpg",
    price: "Rs. 699",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 12,
    pname: "us polo",
    product: "pure cotton casual shirt",
    filter: "men",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9246129/2019/4/9/2830b7db-9e10-4ecd-9b6d-4c520b9bb3ef1554792060495-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9246129/2019/4/9/1800a5d2-9d38-45f3-9153-b3c38c5d0f961554792060470-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9246129/2019/4/9/8eabd068-8b22-4d96-a19b-be092a5c488c1554792060441-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-3.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9246129/2019/4/9/108a6c63-3fe5-421a-b68b-f6cd5fca10721554792060414-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-4.jpg",
    price: "Rs. 899",
    visible: true,
    category: "shirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
  {
    id: 13,
    pname: "zara",
    product: "casual shirt",
    filter: "women",
    imgscr:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16874834/2022/2/2/11ead8ef-5c4c-4bfd-acda-61ca6ac993711643794455546-Women-Blue-Denim-Shirt-7301643794454830-1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16874834/2022/2/2/ed1ccf2e-dfd5-4ed6-9afc-2a5bcbb95fe41643794455537-Women-Blue-Denim-Shirt-7301643794454830-2.jpg",
    img3: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16874834/2022/2/2/76090704-18ec-4f98-b399-8e36e0f750801643794455520-Women-Blue-Denim-Shirt-7301643794454830-4.jpg",
    img4: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16874834/2022/2/2/7fe7843c-4b15-4b25-be08-dd56ef67b5d41643794455500-Women-Blue-Denim-Shirt-7301643794454830-6.jpg",
    price: "Rs. 999",
    visible: true,
    category: "overshirt",
    size: [34, 36, 42],
    description:
      "Amazing clothing you would love the asthectic look and feel of the fabric and will enjoy the time you have it on !",
  },
];

export default productData;
