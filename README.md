# schnack

schnack ist eine Webanwendung, in der du im Raum Hamburg food-spots findest und diese tracken bzw. bewerten kannst.

## Wie?

Die Oberfläche ist in Form einer Map (OpenStreetMap/leaflet) aufgebaut, die dir direkt alle food-spots anzeigt. Beim Klick auf einen dieser Foodspots, wird ein Modal mit Infos zu diesem Spot angezeigt und anschließend hast du die Möglichkeit, diesen Spot zu bewerten.

## Woher kommen die Daten?

Die Daten stammen von OpenStreetMap (OSM) (https://www.openstreetmap.de/) bzw. aus einem Import der Overpass API (https://overpass-api.de/). Die Overpass API ist eine read-only API, die nur einen ausgewählten Teil der OpenStreetMap-Daten bereitstellt.

Im Gegensatz zur offiziellen OSM API, die für das Bearbeiten der Daten optimiert ist, ist die Overpass API für die Datenaufnahme optimiert, um wenige bis viele Elemente innerhalb weniger Minuten erhalten zu können. Hinzu kommt die Vielfältigkeit der Suchkriterien wie z.B. Standort, Objekttyp, Tags etc.

Es fungiert somit als Datenbank-Backend für verschiedene Dienste

(https://wiki.openstreetmap.org/wiki/Overpass_API#Introduction)

## Interesse

Das Projekt dient einerseits für Lernzwecke für mich persönlich als auch für die eigene Nutzung der Anwendung.

Der Code ist zu 100% von mir geschrieben bzw. ganz oldschool aus Dokumentationen/Stack Overflow entnommen. Ich weiß, dass ich mir viel Zeit sparen könnte
durch das Nutzen von z.B. einem Backend-as-a-Service oder anderen gewissen Libraries/Tools aber wo wäre dann der Spaß bei der ganzen Sache? :)
