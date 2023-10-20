# Hangman game using javascrpt
# pseudocode
```
Pick a random word

while word is not guessed{
    show the user's current progress
    if guess is more than 1 letter{
       Tell player to pick a single letter
    }
    else if user wants to quit{
       allow user to quit
    }
    else{
        if guess is in word{
            update the user's progress
        }
    }
}

Congratulate the user on guessing the word!
```