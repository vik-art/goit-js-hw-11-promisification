const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
      return new Promise((resolve,reject) =>{
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user);
      resolve(updatedUsers);
      reject(error)
      })
    }
  
  const logger = updatedUsers => console.table(updatedUsers);
  const errorMessage = error => console.log("Что-то пошло не так")
  
  
  toggleUserState(users, 'Mango').then(logger).catch(errorMessage);
  toggleUserState(users, 'Lux').then(logger).catch(errorMessage);