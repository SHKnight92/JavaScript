var a = 100;

// newPrint(a);
print(10);

var newPrint = print;
newPrint(45);

function print(a) {
  console.log(a);
}

print(a);



// creation Phase
// a = undefined
// newPrint = undefined
// print = ref


// Execution Phase
// a =100
// newPrint  [Show error]
// print = 10
// newPrint = 45


