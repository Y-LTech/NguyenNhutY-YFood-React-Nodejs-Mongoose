import fs from "fs";

// Mảng dữ liệu mẫu
const foodList = [
  {
    id: "1",
    title: "Top 10 Superfoods to Boost Your Health",
    summary:
      "Discover the top superfoods that can enhance your overall health and well-being...",
    content:
      "Superfoods are nutrient-dense foods that are particularly beneficial for health and well-being. This article explores the top 10 superfoods, including kale, blueberries, and quinoa, and their health benefits...",
    author: "Alice Johnson",
    date: "2024-08-10T12:00:00Z",
    image: "https://example.com/superfoods.jpg", // URL hình ảnh
    comments: [
      {
        id: "1",
        author: "Jane Smith",
        content:
          "Great list of superfoods! I love incorporating these into my diet.",
        date: "2024-08-11T14:00:00Z",
      },
    ],
    likes: 832,
  },
  {
    id: "2",
    title: "How to Make Delicious Smoothie Bowls",
    summary:
      "Learn how to prepare smoothie bowls that are both healthy and delicious...",
    content:
      "Smoothie bowls are a great way to enjoy a nutritious and satisfying meal. This guide covers various recipes and tips for making smoothie bowls with ingredients like fresh fruits, nuts, and seeds...",
    author: "John Doe",
    date: "2024-08-09T08:30:00Z",
    image: "https://example.com/smoothie-bowls.jpg", // URL hình ảnh
    comments: [
      {
        id: "2",
        author: "Bob Brown",
        content:
          "The smoothie bowl recipes look amazing! Can’t wait to try them.",
        date: "2024-08-09T09:45:00Z",
      },
    ],
    likes: 479,
  },
  {
    id: "3",
    title: "The Benefits of a Plant-Based Diet",
    summary: "Explore the health benefits of adopting a plant-based diet...",
    content:
      "A plant-based diet can offer numerous health benefits, including reduced risk of chronic diseases and improved digestion. This article discusses the advantages of a plant-based diet and provides tips for transitioning...",
    author: "Emily Davis",
    date: "2024-08-08T10:15:00Z",
    image: "https://example.com/plant-based-diet.jpg", // URL hình ảnh
    comments: [
      {
        id: "3",
        author: "Michael Lee",
        content:
          "Great insights on plant-based eating. I’m considering making the switch!",
        date: "2024-08-08T11:00:00Z",
      },
    ],
    likes: 621,
  },
  {
    id: "4",
    title: "Healthy Meal Prep Ideas for Busy Weekdays",
    summary:
      "Get ideas for meal prepping healthy and easy meals for busy weekdays...",
    content:
      "Meal prepping can save time and ensure you have healthy meals ready to go. This article provides ideas and recipes for preparing meals in advance, including tips for storage and portion control...",
    author: "Olivia Brown",
    date: "2024-08-07T09:00:00Z",
    image: "https://example.com/meal-prep.jpg", // URL hình ảnh
    comments: [
      {
        id: "4",
        author: "Sarah Wilson",
        content:
          "These meal prep ideas are fantastic! They will definitely help me stay on track with my diet.",
        date: "2024-08-07T10:30:00Z",
      },
    ],
    likes: 256,
  },
  {
    id: "5",
    title: "The Ultimate Guide to Healthy Snacking",
    summary:
      "Discover healthy snack options and how they can benefit your diet...",
    content:
      "Healthy snacking is an important part of maintaining a balanced diet. This guide explores various healthy snack options, including fruits, nuts, and protein bars, and offers tips for choosing nutritious snacks...",
    author: "Mia Taylor",
    date: "2024-08-06T08:00:00Z",
    image: "https://example.com/healthy-snacks.jpg", // URL hình ảnh
    comments: [
      {
        id: "5",
        author: "Lucas Brown",
        content:
          "These snack ideas are great! I love having healthy options on hand.",
        date: "2024-08-06T09:15:00Z",
      },
    ],
    likes: 914,
  },
  {
    id: "6",
    title: "How to Create a Balanced Meal Plan",
    summary:
      "Learn how to design a meal plan that provides balanced nutrition...",
    content:
      "Creating a balanced meal plan involves including a variety of foods to meet your nutritional needs. This article provides a step-by-step guide to designing a meal plan that includes proteins, carbs, fats, and essential vitamins and minerals...",
    author: "James Lee",
    date: "2024-08-05T12:00:00Z",
    image: "https://example.com/meal-plan.jpg", // URL hình ảnh
    comments: [
      {
        id: "6",
        author: "Emma Carter",
        content:
          "This meal planning guide is very helpful. I’m excited to start planning my meals more effectively.",
        date: "2024-08-05T13:30:00Z",
      },
    ],
    likes: 785,
  },
  {
    id: "7",
    title: "Benefits of Hydration and How to Stay Hydrated",
    summary:
      "Understand the importance of hydration and tips to keep yourself hydrated...",
    content:
      "Proper hydration is essential for maintaining good health. This article discusses the benefits of staying hydrated and provides practical tips for ensuring you drink enough water throughout the day...",
    author: "David Wilson",
    date: "2024-08-04T09:00:00Z",
    image: "https://example.com/hydration.jpg", // URL hình ảnh
    comments: [
      {
        id: "7",
        author: "Sophia Adams",
        content:
          "Staying hydrated is crucial, and this article has great tips to make it easier.",
        date: "2024-08-04T10:15:00Z",
      },
    ],
    likes: 398,
  },
  {
    id: "8",
    title: "Understanding Macronutrients and Micronutrients",
    summary:
      "A guide to macronutrients and micronutrients and their roles in your diet...",
    content:
      "Macronutrients and micronutrients are essential for overall health. This guide explains the differences between them and how to ensure you’re getting enough of both through your diet...",
    author: "Alice Johnson",
    date: "2024-08-03T08:00:00Z",
    image: "https://example.com/macronutrients.jpg", // URL hình ảnh
    comments: [
      {
        id: "8",
        author: "Ryan Davis",
        content:
          "Understanding nutrients is so important for a balanced diet. Thanks for the detailed explanation!",
        date: "2024-08-03T09:30:00Z",
      },
    ],
    likes: 540,
  },
  {
    id: "9",
    title: "Delicious and Nutritious Breakfast Ideas",
    summary:
      "Get inspired with healthy breakfast ideas to start your day right...",
    content:
      "Breakfast is an important meal that can set the tone for the rest of your day. This article offers a variety of healthy breakfast ideas, including smoothies, oatmeal, and avocado toast...",
    author: "Emily Carter",
    date: "2024-08-02T11:00:00Z",
    image: "https://example.com/breakfast-ideas.jpg", // URL hình ảnh
    comments: [
      {
        id: "9",
        author: "Michael Thompson",
        content:
          "These breakfast ideas look delicious and healthy. Can’t wait to try them!",
        date: "2024-08-02T12:15:00Z",
      },
    ],
    likes: 672,
  },
  {
    id: "10",
    title: "How to Incorporate More Vegetables into Your Diet",
    summary:
      "Tips and recipes for increasing vegetable intake in your daily meals...",
    content:
      "Vegetables are a vital part of a healthy diet. This article provides practical tips and creative recipes for incorporating more vegetables into your meals, from salads to soups...",
    author: "John Smith",
    date: "2024-08-01T10:00:00Z",
    image: "https://example.com/vegetables.jpg", // URL hình ảnh
    comments: [
      {
        id: "10",
        author: "Sara Wilson",
        content:
          "These tips are very helpful. I struggle with eating enough veggies, so this is a great resource.",
        date: "2024-08-01T11:30:00Z",
      },
    ],
    likes: 198,
  },

  {
    id: "11",
    title:
      "The Power of Superfoods: Boost Your Health with These Nutrient-Rich Foods",
    summary:
      "Learn about the benefits of incorporating superfoods into your diet and discover some top picks for boosting your health.",
    content:
      "Superfoods are packed with nutrients and antioxidants that can greatly benefit your health. This article highlights some of the most powerful superfoods, their health benefits, and delicious ways to include them in your daily diet.",
    author: "Olivia Martinez",
    date: "2024-08-02T10:00:00Z",
    image: "https://example.com/superfoods.jpg",
    comments: [
      {
        id: "11",
        author: "James Anderson",
        content:
          "I love learning about superfoods! This guide is perfect for making healthier choices.",
        date: "2024-08-02T11:45:00Z",
      },
    ],
    likes: 743,
  },
  {
    id: "12",
    title: "10 Easy and Healthy Breakfast Ideas to Start Your Day Right",
    summary:
      "Kickstart your mornings with these nutritious and delicious breakfast options.",
    content:
      "Breakfast is the most important meal of the day, and choosing the right foods can set the tone for a healthy day. This article provides a variety of easy and healthy breakfast ideas that are both satisfying and good for you.",
    author: "Sophia Taylor",
    date: "2024-08-03T10:00:00Z",
    image: "https://example.com/healthy-breakfast.jpg",
    comments: [
      {
        id: "12",
        author: "Benjamin Clark",
        content:
          "These breakfast ideas are fantastic! I can't wait to try them.",
        date: "2024-08-03T11:30:00Z",
      },
    ],
    likes: 586,
  },
  {
    id: "13",
    title: "The Benefits of Meal Prepping for a Healthier Lifestyle",
    summary:
      "Discover how meal prepping can help you maintain a healthy diet and save time.",
    content:
      "Meal prepping is a great way to ensure you eat healthy throughout the week. This article covers the benefits of meal prepping, including time-saving tips, recipes to get you started, and how to keep your meals fresh and nutritious.",
    author: "Mia Williams",
    date: "2024-08-04T10:00:00Z",
    image: "https://example.com/meal-prepping.jpg",
    comments: [
      {
        id: "13",
        author: "Lucas Davis",
        content:
          "Meal prepping has transformed my eating habits. Thanks for the great tips!",
        date: "2024-08-04T12:15:00Z",
      },
    ],
    likes: 829,
  },
  {
    id: "14",
    title: "How to Make Your Own Healthy Snack Bars at Home",
    summary:
      "Learn how to create your own nutritious snack bars with simple ingredients.",
    content:
      "Healthy snack bars are a great way to keep your energy up throughout the day. This article provides easy recipes for making your own snack bars at home, using wholesome ingredients and avoiding added sugars and preservatives.",
    author: "Isabella Johnson",
    date: "2024-08-05T10:00:00Z",
    image: "https://example.com/healthy-snack-bars.jpg",
    comments: [
      {
        id: "14",
        author: "Ethan Roberts",
        content:
          "These homemade snack bars are delicious and easy to make. I highly recommend them!",
        date: "2024-08-05T11:45:00Z",
      },
    ],
    likes: 357,
  },
  {
    id: "15",
    title: "The Top 5 Healthy Salad Recipes for Any Meal",
    summary:
      "Enjoy these healthy and satisfying salad recipes that are perfect for any meal.",
    content:
      "Salads are a versatile and nutritious meal option. This article features five healthy salad recipes that are not only delicious but also packed with nutrients. From hearty grain salads to refreshing veggie mixes, there's something for everyone.",
    author: "Charlotte Lewis",
    date: "2024-08-06T10:00:00Z",
    image: "https://example.com/healthy-salads.jpg",
    comments: [
      {
        id: "15",
        author: "Oliver Wilson",
        content:
          "These salad recipes are fantastic! I love how fresh and nutritious they are.",
        date: "2024-08-06T12:00:00Z",
      },
    ],
    likes: 964,
  },
  {
    id: "16",
    title: "The Importance of Hydration: Tips for Drinking More Water Daily",
    summary:
      "Find out why staying hydrated is crucial for your health and get tips for drinking more water.",
    content:
      "Proper hydration is essential for overall health and well-being. This article explains the benefits of staying hydrated, the signs of dehydration, and practical tips for increasing your water intake throughout the day.",
    author: "Amelia Scott",
    date: "2024-08-07T10:00:00Z",
    image: "https://example.com/hydration.jpg",
    comments: [
      {
        id: "16",
        author: "William Hall",
        content:
          "I've been struggling with hydration, and these tips are really helpful. Thanks!",
        date: "2024-08-07T11:30:00Z",
      },
    ],
    likes: 412,
  },
  {
    id: "17",
    title: "Delicious Smoothie Recipes for a Nutritious Boost",
    summary:
      "Try these easy and healthy smoothie recipes that provide a nutritious boost to your day.",
    content:
      "Smoothies are a great way to get a concentrated dose of vitamins and minerals. This article features a selection of delicious and nutritious smoothie recipes, including fruit blends, green smoothies, and protein-packed options.",
    author: "Evelyn Turner",
    date: "2024-08-08T10:00:00Z",
    image: "https://example.com/smoothies.jpg",
    comments: [
      {
        id: "17",
        author: "Jack Martinez",
        content:
          "These smoothie recipes are amazing! They taste great and are so healthy.",
        date: "2024-08-08T12:00:00Z",
      },
    ],
    likes: 718,
  },
  {
    id: "18",
    title: "The Ultimate Guide to Whole Grains: Benefits and Delicious Recipes",
    summary:
      "Explore the benefits of incorporating whole grains into your diet and discover some tasty recipes to try.",
    content:
      "Whole grains are an important part of a balanced diet, offering numerous health benefits such as improved digestion and reduced risk of chronic diseases. This comprehensive guide discusses the benefits of whole grains, provides tips for including them in your diet, and features delicious recipes to help you get started.",
    author: "Zoe Wilson",
    date: "2024-08-12T10:00:00Z",
    image: "https://example.com/whole-grains.jpg",
    comments: [
      {
        id: "21",
        author: "Ryan Scott",
        content:
          "I’ve been trying to eat more whole grains, and this guide is really helpful. The recipes look amazing!",
        date: "2024-08-12T11:30:00Z",
      },
    ],
    likes: 591,
  },
  {
    id: "19",
    title: "The Benefits of Eating Seasonal Fruits and Vegetables",
    summary:
      "Discover why eating seasonal produce is better for your health and the environment.",
    content:
      "Eating seasonal fruits and vegetables offers numerous health and environmental benefits. This article explains the advantages of consuming seasonal produce, provides a guide to what's in season, and suggests ways to incorporate seasonal items into your meals.",
    author: "Mason Green",
    date: "2024-08-10T10:00:00Z",
    image: "https://example.com/seasonal-produce.jpg",
    comments: [
      {
        id: "19",
        author: "Lily Harris",
        content:
          "I love buying seasonal produce! This article is a great reminder of why it's so beneficial.",
        date: "2024-08-10T12:00:00Z",
      },
    ],
    likes: 830, // Thêm thuộc tính likes
  },
  {
    id: "20",
    title: "How to Make Healthy and Delicious Homemade Soups",
    summary:
      "Enjoy wholesome and tasty homemade soups that are good for your health.",
    content:
      "Homemade soups can be both nutritious and comforting. This article provides recipes for healthy soups made with fresh ingredients, tips for making soups in bulk, and ideas for adding flavor without extra calories.",
    author: "Harper Young",
    date: "2024-08-11T10:00:00Z",
    image: "https://example.com/homemade-soups.jpg",
    comments: [
      {
        id: "20",
        author: "Ella Robinson",
        content:
          "These soup recipes are fantastic! They’re easy to make and so healthy.",
        date: "2024-08-11T11:30:00Z",
      },
    ],
    likes: 978, // Thêm thuộc tính likes
  },
];

// Chuyển đổi mảng thành chuỗi JSON
const jsonString = JSON.stringify(foodList, null, 2);

// Đường dẫn tới file JSON
const filePath = "bloglist.json";

// Ghi chuỗi JSON vào file
fs.writeFile(filePath, jsonString, (err) => {
  if (err) {
    console.error("Lỗi khi ghi file JSON:", err);
  } else {
    console.log("File JSON đã được tạo thành công:", filePath);
  }
});
