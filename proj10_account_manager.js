// Declaration and initial population of the adashe array

const adasheDb = [];

// Add member

function addMember(name, amount) {
    const newMember = {
      name: name,
      amount: amount,
    };
    adasheDb.push(newMember);
}

// Usage of add member function

addMember("Aisha Bello", 5000)
addMember("John Musa", 3000)
addMember("Ngozi Okafor", 7500)
addMember("Abdullahi Bello", 3800)
addMember("Emeka Obi", 6000)
addMember("Fatima Sani", 4500)
addMember("Daniel Uche", 8000)
addMember("Rita Chukwu", 6700)
addMember("Grace James", 2500)
addMember("Musa Garba", 4200)
addMember("Ibrahim Sule", 7000)
addMember("Kemi Adebayo", 5500)
addMember("Tunde Bakare", 9000)
addMember("Josephine Danjuma", 6300)
addMember("Helen Yakubu", 6200)
addMember("Chinedu Nnaji", 4000)
addMember("Binta Ahmed", 3500)
addMember("Samuel Okon", 4700)
addMember("Patricia Eze", 5200)
addMember("Linda Peters", 5800)

console.log("---------------------------------------------")

console.log("MEMBERS ACCOUNT DETAILS")

for (i = 0; i < adasheDb.length; i++) {
    console.log(`=> Name: ${adasheDb[i].name} => Amount: ${adasheDb[i].amount}`)
}

console.log("---------------------------------------------")

function updateAmount(name,amt) {
    for (let member of adasheDb) {
      if (member.name === name) {
        member.amount += amt;

        console.log(`=> Name: ${member.name} => Old Balance: $${member.amount - amt} => Deposited Amount: $${amt} => New Balance: $${member.amount}`);
        return;
      }
    }
    console.log(`Student with ID = ${id} not found.`);
}

// Usage of the function to update member amount

console.log("ACCOUNTS UPDATE DETAILS")

updateAmount("Josephine Danjuma", 1000);
updateAmount("Linda Peters", 1500);
updateAmount("Musa Garba", 2000);
updateAmount("Rita Chukwu", 5000);
updateAmount("Abdullahi Bello", 2500);

console.log("---------------------------------------------")

console.log("MEMBERS ACCOUNT DETAILS AFTER AN UPDATE")

for (j = 0; j < adasheDb.length; j++) {
    console.log(`=> Name: ${adasheDb[j].name} => Amount: $${adasheDb[j].amount}`)
}

console.log("---------------------------------------------")

// Get member amount function


function getAmount(name) {
  for (let member of adasheDb) {
    if (member.name === name) {

      let uName = name.toUpperCase()
      console.log(`Account Balance For: ${uName}`)

      console.log(`Current Balance: $${member.amount}`)
      return
    }
  }
  console.log(`Member with ID "${id}" not found.`);
}

// Usage of the function to get one member amount

getAmount("Rita Chukwu")

console.log("---------------------------------------------")

// Function to withdraw / deduct from member's account balance

function withDraw(mname, amt) {
  for (let member of adasheDb) {
    if (member.name === mname) {
      member.amount -= amt
      let uName = mname.toUpperCase()
      console.log(`Account Withdrawal By: ${uName}`)

      console.log(`Old Balance: $${member.amount + amt}\nAmount Withdrawn: $${amt}\nCurrent Balance: $${member.amount}`)
       return
    }
  }
}

withDraw("Fatima Sani", 500)

console.log("---------------------------------------------")

// Function to remove a member who withraws everything

function removeMember(dname, damt) {
  for (i = 0; i < adasheDb.length; i++) {
    if (adasheDb[i].name === dname) {
      if (adasheDb[i].amount - damt == 0) {
        indexToRemove = i
        console.log(`${adasheDb[i].name} who is withdrawing the entire account balance of $${adasheDb[i].amount} will be deleted.`)
        break  
      } else if (adasheDb[i].amount - damt > 0) {
        return console.log(`${adasheDb[i].name} has a positive balance of $${adasheDb[i].amount}; cannot be deleted.`)
      }
    }
  }
  for (j = indexToRemove; j < adasheDb.length -1; j++) {
    adasheDb[j] = adasheDb[j + 1]
  }
  adasheDb.length = adasheDb.length - 1

  console.log("---------------------------------------------")

  console.log("MEMBERS ACCOUNT DETAILS AFTER SUCCESSFULLY DELETING A MEMBER")

  for (k = 0; k < adasheDb.length; k++) {
    console.log(`=> Name: ${adasheDb[k].name} => Amount: $${adasheDb[k].amount}`)
  }
}

// Usage of function to delete a member who withdraws all the balance in their account

removeMember("Tunde Bakare", 9000)

console.log("---------------------------------------------")
