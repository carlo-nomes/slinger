# Slinger
This is a solution to the _slinger_ problem from [vlaamse programmeer wedstrijd](https://www.vlaamseprogrammeerwedstrijd.be).

## Problem
Problem description from [www.vlaamseprogrammeerwedstrijd.be](https://vlaamseprogrammeerwedstrijd.be)

### Foute slingers
#### Opgave
Bij de productie van slingers in een fabriek is er gebleken dat er dikwijls fouten optreden. Gevraagd wordt om een algoritme op te stellen dat deze fouten corrigeert.

Een slinger wordt in deze opgave voorgesteld een regel tekst bestaande uit punten en sterren. In correcte slingers worden de sterren op een regelmatig interval geplaatst. Het onderstaande voorbeeld bevat de weergave van een correcte slinger:

`..*...*...*...*...*.`

De sterren in deze slinger komen altijd voor met een tusseninterval van drie punten. De tussenintervallen van een correcte slinger bestaan uit minstens één punt en correcte slingers bestaan uit minstens drie herhalingen.
Bij foute slingers werd er ergens in een correcte slinger een ster vervangen door een punt of een punt vervangen door een ster. Er gebeurt maximaal één vervanging per regel.

#### Invoer
De eerste regel van de invoer bevat het aantal testgevallen (maximaal 150.)
Per testgeval volgt:
 - één regel met de lengte van de slinger (maximaal 200);
 - één regel met een correcte of een foute slinger.

##### voorbeeldinvoer
```
6
20
***.*.*.*.*.*.*.*.*.
20
*.*.*.***.*.*.*.*.*.
21
.*.*.*.*.*...*.*.*.*.
22
*.*...*.*.*.*.*.*.*.*.
22
.*.*.*.*.*.*.*.*.*.*.*
21
.*..*..*..*.....*..*.
```

#### Uitvoer
Per testgeval wordt het volgnummer van het testgeval gevolgd door één
spatie en de gecorrigeerde slinger afgedrukt. Als er geen correctie nodig is dan wordt de oorsponkelijke slinger afgedrukt.

##### voorbeelduitvoer
```
1 *.*.*.*.*.*.*.*.*.*.
2 *.*.*.*.*.*.*.*.*.*.
3 .*.*.*.*.*.*.*.*.*.*.
4 *.*.*.*.*.*.*.*.*.*.*.
5 .*.*.*.*.*.*.*.*.*.*.*
6 .*..*..*..*..*..*..*.
```

## Solution
This solution averts slightly from the proposed problem.

## Installation
```
$ git clone https://github.com/cnomes/slinger.git
```

## Run program
```
$ node slinger
INPUT> *..*..*..*..
====================================================================================
INPUT: *..*..*..*..
LENGTH: 12
INPUT ARRAY:  [ '*..', '*..', '*..', '*..' ]
PATTERN:  *..
FAULTY PARTS:  No faulty parts found.
SOLUTION:  *..*..*..*..
====================================================================================
INPUT>
```

## Run test
Run the program against the 100 inputs and expected outputs provided by the [www.vlaamseprogrammeerwedstrijd.be](https://vlaamseprogrammeerwedstrijd.be).
```
$ node slinger/test
```
