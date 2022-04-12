# Aplikacja do śledzenia wydatków

## Opis

Aplikacja ta została stworzona w ramach Wyzwania React [Dare IT](https://www.dareit.io/).

Posiada ona dwa widoki. Jeden z nich wyświetla listę wydatków i wpływow do budżetu, a także podsumowanie operacji zaprezentowane w postaci wykresów. Drugi z widoków pokazuje informację o zaplanowanym budżecie. Użytkownik ma możliwość dodania i usunięcia pozycji w zaplanowanym budżecie, a także dodania i usunięcia wydatków lub wpływów do budżetu. Wszystkie formularze dodawania posiadają walidację, a po każdej wykonanej akcji użytkowanikowi wyświetla się notyfikacja o jej powodzeniu lub błędzie.

![website-mockup](./readme-img/mockup-dareit-challenge.jpg)

## Cel projektu

Celem pracy nad tym projektem było doskonalenie umiejętności praktycznych w środowisku React.js, a także w pracy z gitem, poznanie dobrych praktyk oraz uczenie się od bardziej doświadczonych osób z branży.

Projekt ten dał mi możliwość rozwinąć moją wiedzę z React.js, poznać inne narzędzia z jego ekosystemu, a także zgłębić bibliotekę komponentów MUI. Ciekawym wzwaniem było wykorzystanie React Hook Form w połączeniu z MUI. Ponadto miałam okazję w sposób praktyczny skorzystać ze Storybooka. Podobało mi się również, że do każdego wyzwania przygotowany był pakiet testów e2e w Cypress. Nauczyło mnie to pracy z testami i debugowania problemów.

## Technologie

- [React.js](https://reactjs.org/)
- [MUI](https://mui.com/)
- [Storybook](https://storybook.js.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://react-query.tanstack.com/)
- [Cypress](https://www.cypress.io/)
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [notistack](https://github.com/iamhosseindhv/notistack)

## Pierwsze kroki

### 🔵 Zanim zaczniesz

Aby uruchomić aplikację upewnij się, że masz zainstalowane:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

### 🧰 Instalacja pakietów NPM

Znajdując się w katalogu głównym repozytorium react-challenge, uruchom terminal a następnie wywołaj następującą komendę

    npm i

Jednocześnie przebiega instalacja dla dwóch aplikacji - client `[install:client]`, zawiera kod frontendowy aplikacji oraz server `[install:server]`, który zasila apkę front-endową danymi.

### 🏃 Uruchomienie aplikacji

#### 🔗 Client i Server

Repozytorium jest skonstruowane w taki sposób aby aplikacja client oraz aplikacja server były uruchamiane jednocześnie. Jest to wymagane ponieważ jedno bez drugiego nie bedzie prawidłowo funkcjonować.

Znajdująć się w katalogu głównym repozytorium uruchom terminal i wykonaj polecenie:

     npm run start

Komenda ta uruchomia 2 aplikacje, które są dostępne pod następującymi adresami:

- client - aplikacja reactowa - http://localhost:3000
- server - aplikacja backendowa - http://localhost:4320
  - dokumentacja API jest dostępna pod adresem http://localhost:4320/swagger

#### 🏃 Storybook

Storybook służy do pracy nad komponentami w izolacji.

Aby uruchomić storybook należy wywołać następującą komendę znajdując się w katalogu głównym repozytorium:

```bash
npm run storybook
```

Komenda ta uruchomi aplikację Storybook, która będzie dostępna pod adresem http://localhost:6006

#### 🏃 Uruchomienie testów automatycznych

Aby uruchomić testy należy, uruchomić clienta i serwer, testy uruchomić komendą z poziomu katalogu głównego:

    npm run cypress:open

To polecenie uruchomi panel Cypress, w którym możesz uruchomić wszystkie lub wybrane testy.

## Status

- wyzwanie zostało ukończone
- plany na przyszłość:
  - dodanie RWD
  - dodanie możliwości edycji poszczególnych elementow portfela/budżetu
  - dodanie możliwości filtrowania danych
  - dodanie panelu logowania
  - dodanie dark mode
  - dodanie i18n
