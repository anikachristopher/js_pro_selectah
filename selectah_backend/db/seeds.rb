# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


75.times do
    Song.create ([{
        name: Faker::Music::Prince.song,
        artist: Faker::Music.band,
        genre: Faker::Music.genre
    }])
end

# Song.create(name: "anikac", artist: "anika", genre: "pop")

# Playlist.create(title: "car", description: "driving to work", date: 1/2/20)

