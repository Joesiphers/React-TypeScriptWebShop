const products=[
      {
        "id": 1,
        "sku": 18644119330491312,
        "title": "Raspberry Pi Screen",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "style": "Preta com listras brancas",
        "price": 28.00,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
		"description":["1920 X 1080 Resolution",
    "5.5' IPS LCD Full HD 1080P ",
    "5V micro USB Power-in",
		"HDMI Video Input"],
		"images":["../pic/PiScreen.jpg","../pic/backs.jpg","../pic/Verti.jpg"],
		"thumbImg":["../pic/PiScreenTh.jpg "]
      },
  
      {
        "id": 2,
        "sku": 11854078013954528,
        "title": "High Brighness Scree",
        "availableSizes": ["X", "L"],
        "style": "Branco com listras pretas",
        "price": 85.00,
        "installments": 7,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
		"description":["High Brightness 1500 nit","readable under Sunlight","Snow Flake Screen - when no signal", "Optional recording DVR recording","Diversity 5.8g Receiver",
		"Resolution 800 X 600"],
		"images":["../pic/HB600s.jpg","../pic/HB600-bs.jpg"],
		"thumbImg":["../pic/HB600th.jpg "]
      }
    ];
export default function getProducts (){ 
  return products
};
  

	