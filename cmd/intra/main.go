package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func main() {
	fmt.Println(os.Getenv("DBHOST"))
	r := gin.Default()
	db := createDB()
	tableB, err := os.ReadFile("sql/table.sql")
	if err != nil {
		panic(err)
	}
	table := string(tableB)
	_, err = db.Exec(table)
	if err != nil {
		panic(err)
	}
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.GET("/getAllUsers", func(ctx *gin.Context) {
		stmt, err := db.Prepare("SELECT * FROM USERS LIMIT 1;")
		if err != nil {
			panic(err)
		}
		res, err := stmt.Query()
		if err != nil {
			panic(err)
		}
		var username string
		var id int64
		var xp int64
		var points int64
		var level int64
		res.Next()
		err = res.Scan(&id, &username, &level, &xp, &points)
		res.Close()
		stmt.Close()
		if err != nil {
			panic(err)
		}
		ctx.JSON(http.StatusOK, gin.H{
			"username": username,
			"id":       id,
			"xp":       xp,
			"points":   points,
			"level":    level,
		})
	})
	r.Run(":7070") // listen and serve on 0.0.0.0:7070 (for windows "localhost:8080")
}

func createDB() *sql.DB {
	dbinfo := fmt.Sprintf("host=%s password=%s user=postgres sslmode=disable", os.Getenv("DBHOST"), os.Getenv("DBPASSWORD"))
	db, err := sql.Open("postgres", dbinfo)
	if err != nil {
		panic(err)
	}
	if err := db.Ping(); err != nil {
		panic(err)
	}
	return db
}
