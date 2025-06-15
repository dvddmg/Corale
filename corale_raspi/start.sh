ù#!/bin/bash
#export DISPLAY=:0
jackd -R -d alsa -r 48000 -P hw:1 -o 2 -S &
sleep 1
pd -open receive_raspi.pd -send "chan 7" -nogui
