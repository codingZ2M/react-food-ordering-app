const allProducts = [
    {
      id: 'SNEreRdx01',
      title: 'Shadow Sporty Black',
      price: '39.99',
      image: 'https://images.unsplash.com/photo-1609357871098-7949aa2fb20d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      qty:1,
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      category: 'Desserts',
      curatedProduct: true
    },
    {
        id: 'WATreRdx01',
        title: 'Atlantic Flyback',
        price: '54.99',
        image: 'https://images.unsplash.com/photo-1543287920-26349b5b1376?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Desserts',
        curatedProduct: true
      },
      {
        id: 'SNEreRdx03',
        title: 'Gel Lyte React',
        price: '29.99',
        image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Pizza',
        curatedProduct: false
      },
      {
        id: 'WATreRdx04',
        title: 'Tommy Guess',
        price: '33.99',
        image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Pizza',
        curatedProduct: true
      },
        {
            id: 'SNEreRdx05',
            title: 'Vibrant Red Apricot',
            price: '31.99',
            image: 'https://images.unsplash.com/photo-1587536849024-daaa4a417b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Desserts',
            curatedProduct: false
          },
          {
            id: 'WATreRdx07',
            title: 'Flyback Club Campus',
            price: '29.99',
            image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Pizza',
            curatedProduct: false         
          },
    
          {
            id: 'SUreRdx01',
            title: 'Unisex Polarized Retro Sunglass',
            price: '59.99',
            image: 'https://images.unsplash.com/photo-1557803056-4acbacad87d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Bakery',
            curatedProduct: true
          },
       
          {
            id: 'SHreRdx01',
            title: 'Composite Toe Waterproof Shoe For Men',
            price: '53.99',
            image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Desserts',
            curatedProduct: false,
          },
          {
            id: 'SHreRdx02',
            title: 'Composite Cloudfoam Ilation Waterproof Basketball Shoe',
            price: '45.99',
            image: 'https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Desserts',
            curatedProduct: true,
          },
          {
            id: 'SHreRdx03',
            title: 'Waterproof Running, Walking, Gym Sports Shoe',
            price: '66.99',
            image: 'https://images.unsplash.com/photo-1615996006141-6356067b9145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Burger',
            curatedProduct: true,
          },
          {
            id: 'SHreRdx04',
            title: 'Lace-Up Lightweight Casual Shoes ',
            price: '75.99',
            image: 'https://images.unsplash.com/photo-1565060299583-08dd3af8e3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Burger',
            curatedProduct: true,
          },
          {
            id: 'SHreRdx05',
            title: 'Lace-Up Sports Running,Walking,Gym,Training Sneaker',
            price: '69.99',
            image: 'https://images.unsplash.com/photo-1603876468126-3f1fbc48de56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Fast Food',
            curatedProduct: true,
          },

          {
            id: 'WAreRdx01',
            title: 'Club Campus Analog Black Gold Dial Men Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1581430678167-5c17b302c5e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Burger',
            curatedProduct: true
          },
          {
            id: 'WAreRdx02',
            title: 'Analog Black Dial Unisex-Adult Wrist Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1516213335993-159eca2981af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Fast Food',
            curatedProduct: false
          },
    
          {
            id: 'WAreRdx04',
            title: 'Club Campus Analog Black Dial Men Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Drink',
            curatedProduct: true
          },
          {
            id: 'WAreRdx05',
            title: 'Analog Brown Silicone Strap Women Wrist Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Bakery',
            curatedProduct: false
          },
          {
            id: 'WAreRdx05',
            title: 'Analog Brown Silicone Strap Women Wrist Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Bakery',
            curatedProduct: false
          },
          {
            id: 'WAreRdx05',
            title: 'Analog Brown Silicone Strap Women Wrist Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Bakery',
            curatedProduct: false
          },
          {
            id: 'WAreRdx05',
            title: 'Analog Brown Silicone Strap Women Wrist Watch',
            price: '33.99',
            image: 'https://images.unsplash.com/photo-1599785209758-243af93bd074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Bakery',
            curatedProduct: false
          },
  ];
  
  export default allProducts;

  

