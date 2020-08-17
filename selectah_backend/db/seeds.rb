# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# 5.times do
#     Song.create ([{
#         name: Faker::Music::Prince.song,
#         artist: Faker::Music.band,
#         genre: Faker::Music.genre
#     }])
# end


one = Playlist.create(title: "Ready for Reggae", description: "Old School Reggae Music", date_created: "07-01-20")
two = Playlist.create(title: "Pop Playground", description: "All the Newest Pop Music", date_created: "07-15-20")
three = Playlist.create(title: "Afro Beat Party", description: "Most Popluar Afro Beat Music", date_created: "07-30-20")
four = Playlist.create(title: "Trinibad", description: "Trinidad Dancehall Hits", date_created: "08-01-20")
five = Playlist.create(title: "Grime Time", description: "London Grime Music", date_created: "08-10-20")
six = Playlist.create(title: "Rap Attack", description: "New Rap Hits", date_created: "08-15-20")


first = Song.create(name: 'Ye', artist: 'Burna Boy', genre: 'afro beat', playlist: three)
second = Song.create(name: 'Monsterz Out', artist: 'K Lion', genre: 'trinibad', playlist: four)
third = Song.create(name: 'Go Crazy', artist: 'Chris Brown', genre: 'pop', playlist: two)
fourth = Song.create(name: 'Must Be', artist: 'J Hus', genre: 'grime', playlist: five)
fifth = Song.create(name: 'Three Little Birds', artist: 'Bob Marley', genre: 'reggae', playlist: one)
sixth = Song.create(name: 'Highest in The Room', artist: 'Travis Scott', genre: 'rap', playlist: six)

