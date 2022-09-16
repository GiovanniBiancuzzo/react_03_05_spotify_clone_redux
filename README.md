### Spotify in Redux

Comincia partendo dall’applicazione Spotify che trovi in fondo a questa pagina. Oggi i tuoi compiti saranno quelli di creare un’applicazione React da quel progetto e gestirne lo stato in Redux.

## 💬Features:

Riscrivi l’applicazione utilizzando React, mantenendo le funzionalità attuali invariate (non dimenticare le rotte per gestire le tre schermate principali e la funzione di ricerca nella sidebar)
Una volta completata, installa i pacchetti necessari per implementare Redux

Cliccando una canzone, il nome e i dettagli dovranno apparire nel “player musicale”, la sezione in fondo alla pagina che mostra i controlli di ascolto (usa Redux)

Accanto ad ogni canzone dovrai aggiungere la funzionalità per mettere “Mi piace” alla canzone. Da quel momento in avanti, qualunque volta la canzone apparirà, lo stato del “mi piace” dovrà riflettere quello salvato in Redux

[EXTRA] Salva nello store Redux anche i risultati di ricerca che ottieni dalle API
[EXTRA] La possibilità di aggiungere canzoni ad altre playlist rispetto alla coda di riproduzione normale
🔍 Search

Parametro: query

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

Esempio: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

## 💡 Hints:

Usa lo store per tenere traccia delle canzoni di cui l’utente ha messo “mi piace” e controllalo di conseguenza ogni volta che visualizzi una canzone.
Usa lo store per tenere traccia della canzone che sta attualmente suonando.

album page, artist page, riproduzione
