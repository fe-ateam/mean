Notes
=====


Questions
---------

* Ages
* Location
* Housing
* Food
* Travel
* Hobby


Images
------

* Landing background
* Icon for each question and answer


Question/Answers UI model
-------------------------

```json
[
  {
    id: "location", // We can use the id to get the image URL
    name: "Where do you want to retire?",
    type: "text"
  },

  {
    id: "housing",
    name: "What type of home do you want to live in?",
    type: "radiobutton",
    answers: [
      // We can use the combination of ID to get the image URL
      { id: "housing_rent_1_in", name: "Rent 1-bedroom apartment in city centre", selected: true },
      { id: "housing_rent_3_in", name: "Rent 3-bedroom apartment in city centre" },
      { id: "housing_rent_1_out", name: "Rent 1-bedroom apartment outside of centre" },
      { id: "housing_rent_3_out", name: "Rent 3-bedroom apartment outside of centre" },
      { id: "housing_buy_in", name: "Buy house in city centre" },
      { id: "housing_buy_out", name: "Buy house outside of centre" }
    ]
  },

  {
    id: "hobby",
    name: "What hobbies do you like to have?",
    type: "checkbox",
    answers: [
      { id: "hobby_golf", name: "Golf" },
      { id: "hobby_fishing", name: "Fishing" },
      { id: "hobby_hiking", name: "Hiking" },
      { id: "hobby_dancing", name: "Dancing" }
    ]
  }

  // , ...
]
```

We might need a mapping of answer IDs to Numbeo cost item IDs (or item names).

```json
{
  "housing_rent_1_in": "Apartment (1 bedroom) in City Centre",
  "housing_buy_in": "Price per Square Meter to Buy Apartment in City Centre"

  // , ...
}
```