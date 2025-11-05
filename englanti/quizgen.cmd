@ECHO OFF
REM suurentaa ikkunan
REM mode 800 (koko näyttö)
@mode con:cols=120 lines=40
REM asettaa enkoodauksen utf-8 tyyliin
@ECHO  Asetan asetuksia...
@chcp 65001
REM Tyhjentää näytön koska ylläoleva tulostaisi "Active code page"
CLS
@ECHO.  
@ECHO  Quizbit kysymyspatterien luonti!
@ECHO  Aloitetaan...

python  -W "ignore" C:\Projektit\Omat\quizbit\englanti\quizbit.py

