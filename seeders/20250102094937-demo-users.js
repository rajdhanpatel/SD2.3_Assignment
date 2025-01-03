module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', 
    [
      {
        username: 'John Doe',
        name: 'John Doe',
        repoCount: 0,
        location: 'Lagos, Nigeria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'JaneSmith',
        name: 'Jane Smith',
        repoCount: 5,
        location: 'New York, USA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'MikeBrown',
        name: 'Mike Brown',
        repoCount: 2,
        location: 'Toronto, Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'EmmaWatson',
        name: 'Emma Watson',
        repoCount: 8,
        location: 'London, UK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'CarlosLopez',
        name: 'Carlos Lopez',
        repoCount: 3,
        location: 'Mexico City, Mexico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'SaraJohnson',
        name: 'Sara Johnson',
        repoCount: 6,
        location: 'Sydney, Australia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'RajPatel',
        name: 'Raj Patel',
        repoCount: 1,
        location: 'Mumbai, India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ChenWei',
        name: 'Chen Wei',
        repoCount: 4,
        location: 'Beijing, China',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'AnnaIvanova',
        name: 'Anna Ivanova',
        repoCount: 7,
        location: 'Moscow, Russia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'LiamJones',
        name: 'Liam Jones',
        repoCount: 0,
        location: 'Cape Town, South Africa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], 
     {

     }
  )
},
down: async(queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('users', null, {});
},
}
