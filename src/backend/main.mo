import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type MenuItem = {
    name : Text;
    description : Text;
    price : Nat; // Price in paise (1 INR = 100 paise)
    available : Bool;
    category : Category;
  };

  type Review = {
    customerName : Text;
    rating : Nat; // 1-5
    comment : Text;
    date : Text;
  };

  type RestaurantInfo = {
    name : Text;
    address : Text;
    phone : Text;
    email : Text;
    hours : Text;
    instagram : Text;
    facebook : Text;
    whatsapp : Text;
  };

  type Category = {
    #fastFood;
    #tandoori;
    #sandwich;
    #friesSnacks;
    #soup;
    #chaat;
  };

  let reviews = List.empty<Review>();

  // Seed data for fallback
  let seedMenuItems = [
    {
      name = "Veg Burger";
      description = "Delicious vegetable patty burger";
      price = 12900;
      available = true;
      category = #fastFood;
    },
    {
      name = "Paneer Tikka";
      description = "Grilled paneer cubes with spices";
      price = 18900;
      available = true;
      category = #tandoori;
    },
    {
      name = "Grilled Sandwich";
      description = "Toasted sandwich with veggies";
      price = 9900;
      available = true;
      category = #sandwich;
    },
    {
      name = "French Fries";
      description = "Crispy fries with seasoning";
      price = 7900;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Tomato Soup";
      description = "Creamy tomato soup";
      price = 6900;
      available = true;
      category = #soup;
    },
    {
      name = "Pani Puri";
      description = "Crispy puris with tangy water";
      price = 5900;
      available = true;
      category = #chaat;
    },
  ];

  let restaurantInfo = {
    name = "Smiley Home Restaurant";
    address = "123 Main Street, Your City";
    phone = "+91 9876543210";
    email = "smileyrestaurant@example.com";
    hours = "10:00 AM - 10:00 PM";
    instagram = "instagram.com/smileyhome";
    facebook = "facebook.com/smileyhome";
    whatsapp = "+91 9876543210";
  };

  // Queries
  public query ({ caller }) func getMenu() : async [MenuItem] {
    seedMenuItems;
  };

  public query ({ caller }) func getMenuByCategory(category : Category) : async [MenuItem] {
    seedMenuItems.filter(
      func(item) {
        item.category == category;
      }
    );
  };

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    restaurantInfo;
  };

  public query ({ caller }) func getReviews() : async [Review] {
    if (reviews.isEmpty()) {
      [{ customerName = "John Doe"; rating = 5; comment = "Great food!"; date = "2023-06-01" }];
    } else {
      reviews.toArray();
    };
  };

  // Update
  public shared ({ caller }) func submitReview(customerName : Text, rating : Nat, comment : Text, date : Text) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let newReview : Review = {
      customerName;
      rating;
      comment;
      date;
    };

    reviews.add(newReview);
  };
};
