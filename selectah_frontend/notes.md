testing
1234

testing 

Project structure 
Selectah - Music Player

Models 
Playlist- playlist_name; description; date_created
Songs - song_name; artist_name; genre; 

Associations
playlist has_many songs
songs belong_to playlist



FETCH/AJAX requests
create - create a playlist
read - fetch playlist index
delete - delete a playlist

read - fetch songs index


then i would need to seed the db with playlists and not songs

TTD:
remove the date from the playlist seed and rollback the migration
add more seed data


# 5.times do
#     Song.create ([{
#         name: Faker::Music::Prince.song,
#         artist: Faker::Music.band,
#         genre: Faker::Music.genre
#     }])
# end