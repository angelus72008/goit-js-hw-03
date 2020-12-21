const countProps = function(obj) {
    const array = Object.keys(obj);
    console.log(array);
    // return array.length,
    const array2 = Object.values(obj);
    console.log(array2);
    // return array2.length,
    const array3 = Object.entries(obj);
    console.log(array3);
    // return array3.length
  };
  
 


  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3