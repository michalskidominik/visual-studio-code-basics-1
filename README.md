# Version Control
Wbudowane narzedzie SCM w Visual Studio Code pozwala nam na zarządzanie repozytorium oraz rozwiązywanie merge, a dzięki rozszerzeniu GitLens zyskujemy zaawansowane wizualnie narzędzie do zarządzania kodem.



## Source Control Provider
Visual Studio Code nie jest ograniczone do pracy z Source Control git, mozemy doinstalowa rozszerzenie pozwalające na zarządzanie kodem w SVN, a nawet TFS.

![](./images/scm-provider.png)

## Podstawowe operacje na repozytorium


### Branching
Version Control pozwala nam na zarządzanie gałęziami oraz oznaczanie wersji kodu tagiem bezpośrednio w edytorze.

![Available branches commands](./images/available-branches.png)
![Available tags commands](./images/git-tags.png)

<br><br>

## Skróty zwiększające produktywnośc


## Nawigacja
### Wyszukiwanie plików
Visual Studio Code udostępnia 2 wyszukiwarki plików
- Panel wyszukiwania
- Okno interaktywnego wyszukiwania

Panel wyszukiwania pozwala na zaawansowanie wyszukiwanie wraz z wyrazeniami regularnymi i wykluczaniem folderów.

Okno wyszukiwarki plików pozwala na szybkie wyszukiwanie plików. Otwieramy je skrótem CMD + P / SHIFT + CTRL + P.

<img src="./images/quicknav.png" width="600" />

### Wyszukiwanie symboli
Wykorzystują znak **`@`** nawigujemy do symboli w ramach aktywnego pliku.
<img src="./images/gotosymbol.png" width="600" />
Wykorzystują znak **`#`** nawigujemy do symboli we wszystkich plikach workspace.
<img src="./images/symbol.png" width="600" />

### Przechodzenie do linii
Wykorzystują znak **`:`** nawigujemy do wskazanej linii w ramach aktywnego pliku.
<img src="./images/gotoline.png" width="600" />


---
## Rozszerzenia
### Rozszerzenie: GitLens
### Rozszerzenie: Jira and Bitbucket (Official)
Rozszerzenie udostępnia funkcjonalności spełniajace wszystki potrzeby dewelopera w ramach Jira i Bitbucket. Rozszerzenie przede wszystkim udostępnia:
- Podgląd przypisanych zadań
- Tworzenie oraz zarządzanie utworzonymi zadaniami
- Logowanie czasu pracy
- Tworzenie zadań bezpośrednio z kodu oznaczonego wybranym tagiem np. **TODO**, **FIXME**
- Tworzenie, przeglądanie oraz zamykanie Pull Requestów
- Weryfikowanie stanu buildów
#### Jira
Dodac zdjecia
#### Bitbucket
Dodac zdjecia

<br><br>
### SQL Server
Rozszerzenie pozwala na podstawowe zarządzanie bazą, w tym m.in.:
- Deklarowanie wielu połączeń bazodanowych
- Wykonywanie instrukcji języka T-SQL wraz ze wsparciem InteliSense
- Wizualny podgląd struktury oraz zawartości bazy
- Eksport danych do CSV, JSON lub pliku tekstowego

<img src="./images/database-structure-preview.png" width="250" />
<img src="./images/db-context-menu.png" width="200" />

<br><br>
Rozszerzenie udostępnia równiez pakiet snippetów języka T-SQL.
<img src="./images/database-snippets.png" width="500" />

## Debugowanie - częśc 1
### Logpoint
### Hitcount