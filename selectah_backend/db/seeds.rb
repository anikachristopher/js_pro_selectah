# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



5.times do
    Song.create ([{
        name: Faker::Music::Prince.song,
        artist: Faker::Music.band,
        genre: Faker::Music.genre
    }])
end


# Song.create(name: 'Fake Love', artist: 'Duncan Mighty', genre: 'afro beat')
# Song.create(name: 'Ye', artist: 'Burna Boy', genre: 'afro beat')
# Song.create(name: 'Monsterz Out', artist: 'K Lion', genre: 'trinibad')
# Song.create(name: 'Go Crazy', artist: 'Chris Brown', genre: 'pop')
# Song.create(name: 'Must Be', artist: 'J Hus', genre: 'grime')
