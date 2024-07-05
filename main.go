package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./html"))
	http.Handle("/", fs)

	log.Print("Listening on :8710...")
	err := http.ListenAndServe(":8710", nil)
	if err != nil {
		log.Fatal(err)
	}
}
