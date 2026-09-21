// =====================================================
// VIBE
// Основной JavaScript
// =====================================================

let selectedPlatform = "";
let currentRoom = "";
let currentVideoUrl = "";
let currentRoomName = "";

// =====================================================
// ELEMENTS
// =====================================================

const roomModal = document.getElementById("roomModal");
const createRoomHero = document.getElementById("createRoomHero");
const joinRoomHero = document.getElementById("joinRoomHero");
const closeModal = document.getElementById("closeModal");
const roomStepPlatform = document.getElementById("roomStepPlatform");
const roomStepVideo = document.getElementById("roomStepVideo");
const roomStepReady = document.getElementById("roomStepReady");
const platforms = document.querySelectorAll(".platform");
const videoUrl = document.getElementById("videoUrl");
const roomName = document.getElementById("roomName");
const urlError = document.getElementById("urlError");
const platformDescription = document.getElementById("platformDescription");
const openPlatform = document.getElementById("openPlatform");
const createRoomFinal = document.getElementById("createRoomFinal");
const backToPlatforms = document.getElementById("backToPlatforms");
const generatedRoomCode = document.getElementById("generatedRoomCode");
const createdRoomName = document.getElementById("createdRoomName");
const createdPlatform = document.getElementById("createdPlatform");
const copyRoomCode = document.getElementById("copyRoomCode");
const enterRoom = document.getElementById("enterRoom");
const watchPage = document.getElementById("watchPage");
const backHome = document.getElementById("backHome");
const watchRoomCode = document.getElementById("watchRoomCode");
const watchTitle = document.getElementById("watchTitle");
const watchPlatform = document.getElementById("watchPlatform");
const inviteButton = document.getElementById("inviteButton");
const playButton = document.getElementById("playButton");
const playerPlay = document.getElementById("playerPlay");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// Rooms page
const roomsPage = document.getElementById("roomsPage");
const roomsBack = document.getElementById("roomsBack");
const roomsCreateButton = document.getElementById("roomsCreateButton");
const roomLinkInput = document.getElementById("roomLinkInput");
const roomLinkButton = document.getElementById("roomLinkButton");
const roomLinkError = document.getElementById("roomLinkError");
const homePage = document.getElementById("homePage");
const detailPage = document.getElementById("detailPage");
const detailBack = document.getElementById("detailBack");
const detailBrand = document.getElementById("detailBrand");
const detailPoster = document.getElementById("detailPoster");
const detailKicker = document.getElementById("detailKicker");
const detailTitle = document.getElementById("detailTitle");
const detailOriginalTitle = document.getElementById("detailOriginalTitle");
const detailKp = document.getElementById("detailKp");
const detailImdb = document.getElementById("detailImdb");
const detailDirector = document.getElementById("detailDirector");
const detailYear = document.getElementById("detailYear");
const detailCountry = document.getElementById("detailCountry");
const detailDuration = document.getElementById("detailDuration");
const detailTags = document.getElementById("detailTags");
const detailDescription = document.getElementById("detailDescription");
const detailWatchButton = document.getElementById("detailWatchButton");
const moviePlayerModal = document.getElementById("moviePlayerModal");
const moviePlayerClose = document.getElementById("moviePlayerClose");
const moviePlayerCloseBottom = document.getElementById("moviePlayerCloseBottom");
const moviePlayerArt = document.getElementById("moviePlayerArt");
const moviePlayerTitle = document.getElementById("moviePlayerTitle");
const moviePlayerMeta = document.getElementById("moviePlayerMeta");
const moviePlayerScreenTitle = document.getElementById("moviePlayerScreenTitle");
const moviePlayerScreen = document.querySelector(".movie-player-screen");
const moviePlayerStart = document.getElementById("moviePlayerStart");
const moviePlayerVideo = document.getElementById("moviePlayerVideo");
const roomsBrand = document.getElementById("roomsBrand");
const catalogPage = document.getElementById("catalogPage");
const catalogBack = document.getElementById("catalogBack");
const catalogBrand = document.getElementById("catalogBrand");
const catalogSearch = document.getElementById("catalogSearch");
const catalogGrid = document.getElementById("catalogGrid");
const catalogEmpty = document.getElementById("catalogEmpty");
const catalogCount = document.getElementById("catalogCount");
const catalogFilters = [
    document.getElementById("catalogType"),
    document.getElementById("catalogGenre"),
    document.getElementById("catalogYear"),
    document.getElementById("catalogSort")
];

// Mobile nav
const mobileRooms = document.getElementById("mobileRooms");
const mobileLogin = document.getElementById("mobileLogin");
const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item, .desktop-nav-item, .desktop-nav-login");

// Auth
const authSwitch = document.getElementById("authSwitch");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const authPasswordConfirm = document.getElementById("authPasswordConfirm");
const authSubmit = document.getElementById("authSubmit");
let authRegisterMode = false;

// Quick actions
const quickCreate = document.getElementById("quickCreate");
const quickJoin = document.getElementById("quickJoin");
const openCatalog = document.getElementById("openCatalog");
const featuredMovie = document.querySelector(".featured-movie");
const featuredBackground = document.querySelector(".featured-bg");
const featuredTitle = document.getElementById("featuredTitle");
const featuredDescription = document.getElementById("featuredDescription");
const featuredKp = document.getElementById("featuredKp");
const featuredImdb = document.getElementById("featuredImdb");
const featuredGenre = document.getElementById("featuredGenre");
const featuredYear = document.getElementById("featuredYear");
const featuredDots = document.querySelectorAll(".featured-dots span");
let activeFeaturedTitle = "Человек-паук: Новый день";
let featuredTimer = null;

// =====================================================
// SUPABASE
// =====================================================

const SUPABASE_URL = "https://eyeopuiomtuuebgidcow.supabase.co";
const SUPABASE_KEY = "sb_publishable_A7Px99MPvVcbQD-dlHsB-A_8DctMq9l";

const supabaseClient = window.supabase && typeof window.supabase.createClient === "function"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : {
        auth: {
            signUp: async function () {
                return { data: { user: null }, error: { message: "Авторизация временно недоступна в этом браузере." } };
            },
            signInWithPassword: async function () {
                return { data: { user: null }, error: { message: "Авторизация временно недоступна в этом браузере." } };
            },
            signOut: async function () {
                return { error: null };
            }
        }
    };

// =====================================================
// AUTH
// =====================================================

const accountPage = document.getElementById("accountPage");
const accountBack = document.getElementById("accountBack");
const accountLogout = document.getElementById("accountLogout");
const accountEmail = document.getElementById("accountEmail");

if (authClose && authModal) {
    authClose.addEventListener("click", function () {
        authModal.classList.add("hidden");
    });
}

if (mobileLogin && authModal) {
    mobileLogin.addEventListener("click", function () {
        authModal.classList.remove("hidden");
    });
}

if (authSwitch && authTitle && authSubtitle && authPasswordConfirm && authSubmit) {
    authSwitch.addEventListener("click", function () {
        authRegisterMode = !authRegisterMode;

        if (authRegisterMode) {
            authTitle.textContent = "Создать аккаунт";
            authSubtitle.textContent = "Зарегистрируйтесь в VIBE";
            authPasswordConfirm.classList.remove("hidden");
            authSubmit.textContent = "Зарегистрироваться";
            authSwitch.textContent = "Войти";
        } else {
            authTitle.textContent = "С возвращением";
            authSubtitle.textContent = "Войдите в свой аккаунт VIBE";
            authPasswordConfirm.classList.add("hidden");
            authSubmit.textContent = "Войти";
            authSwitch.textContent = "Зарегистрироваться";
        }
    });
}

if (authSubmit) {
    authSubmit.addEventListener("click", async function () {
        const email = document.getElementById("authEmail").value.trim();
        const password = document.getElementById("authPassword").value;
        const passwordConfirm = document.getElementById("authPasswordConfirm").value;

        if (!email || !password) {
            alert("Введите email и пароль.");
            return;
        }

        if (authRegisterMode) {
            if (password !== passwordConfirm) {
                alert("Пароли не совпадают.");
                return;
            }
            if (password.length < 6) {
                alert("Пароль должен содержать минимум 6 символов.");
                return;
            }

            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password
            });

            if (error) {
                alert(error.message);
                return;
            }

            if (data.user) {
                authModal.classList.add("hidden");
                accountPage.classList.remove("hidden");
                accountEmail.textContent = data.user.email;
            }
            return;
        }

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (data.user) {
            authModal.classList.add("hidden");
            accountPage.classList.remove("hidden");
            accountEmail.textContent = data.user.email;
        }
    });
}

if (accountBack && accountPage) {
    accountBack.addEventListener("click", function () {
        accountPage.classList.add("hidden");
    });
}

if (accountLogout) {
    accountLogout.addEventListener("click", async function () {
        await supabaseClient.auth.signOut();
        accountPage.classList.add("hidden");
    });
}

// =====================================================
// ROOMS PAGE
// =====================================================

function openRoomsPage() {
    if (roomModal) {
        roomModal.classList.remove("show");
        roomModal.setAttribute("aria-hidden", "true");
    }
    if (watchPage) watchPage.classList.add("hidden");
    if (detailPage) detailPage.classList.add("hidden");

    const homePage = document.getElementById("homePage");
    if (homePage) homePage.classList.add("hidden");
    if (catalogPage) catalogPage.classList.add("hidden");

    if (roomsPage) roomsPage.classList.remove("hidden");
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCatalogPage() {
    if (roomModal) {
        roomModal.classList.remove("show");
        roomModal.setAttribute("aria-hidden", "true");
    }
    if (watchPage) watchPage.classList.add("hidden");
    if (detailPage) detailPage.classList.add("hidden");
    if (roomsPage) roomsPage.classList.add("hidden");

    const homePage = document.getElementById("homePage");
    if (homePage) homePage.classList.add("hidden");
    if (catalogPage) catalogPage.classList.remove("hidden");

    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    applyCatalogFilters();
}

const catalogMovies = [
    ["Человек-паук: Новый день", "Spider-Man: Brand New Day", 2026, "Фантастика", "Дестин Дэниел Креттон", "США, Великобритания", "2 ч 30 м", "8.0", "8.1", "sci-fi", "Приключения, боевик"],
    ["1+1", "Intouchables", 2011, "Комедия", "Оливье Накаш, Эрик Толедано", "Франция", "1 ч 52 м", "8.9", "8.5", "comedy", "Драма"],
    ["Твоя вина: Лондон", "Your Fault: London", 2025, "Драма", "Даниэль Кальпарсоро", "Великобритания", "1 ч 58 м", "7.8", "6.9", "drama", "Мелодрама"],
    ["Майкл", "Michael", 2025, "Драма", "Антуан Фукуа", "США", "1 ч 58 м", "8.1", "7.0", "drama", "Музыка, биография"],
    ["Холод", "The Cold", 2025, "Триллер", "VIBE Studio", "США", "1 ч 46 м", "7.7", "6.8", "thriller", "Драма"],
    ["Дюна: Часть вторая", "Dune: Part Two", 2024, "Фантастика", "Дени Вильнёв", "США, Канада", "2 ч 46 м", "8.7", "8.6", "sci-fi", "Приключения, драма"],
    ["Оппенгеймер", "Oppenheimer", 2023, "Драма", "Кристофер Нолан", "США, Великобритания", "3 ч", "8.6", "8.6", "drama", "Биография, история"],
    ["Барби", "Barbie", 2023, "Комедия", "Грета Гервиг", "США, Великобритания", "1 ч 54 м", "7.8", "6.8", "comedy", "Фэнтези, комедия"],
    ["Гладиатор 2", "Gladiator II", 2024, "Боевик", "Ридли Скотт", "США, Великобритания", "2 ч 28 м", "7.8", "6.5", "action", "Драма, приключения"],
    ["Фуриоса: Хроники Безумного Макса", "Furiosa: A Mad Max Saga", 2024, "Боевик", "Джордж Миллер", "США, Австралия", "2 ч 28 м", "8.0", "7.5", "action", "Фантастика, приключения"],
    ["Веном: Последний танец", "Venom: The Last Dance", 2024, "Боевик", "Келли Марсел", "США, Великобритания", "1 ч 49 м", "7.6", "6.0", "action", "Фантастика"],
    ["Дэдпул и Росомаха", "Deadpool & Wolverine", 2024, "Боевик", "Шон Леви", "США", "2 ч 8 м", "8.2", "7.6", "action", "Комедия, фантастика"],
    ["Головоломка 2", "Inside Out 2", 2024, "Анимация", "Келси Манн", "США", "1 ч 36 м", "8.3", "7.6", "animation", "Комедия, семейный"],
    ["Гадкий я 4", "Despicable Me 4", 2024, "Анимация", "Крис Рено", "США", "1 ч 34 м", "7.2", "6.1", "animation", "Комедия, семейный"],
    ["Моана 2", "Moana 2", 2024, "Анимация", "Дэвид Деррик-младший", "США", "1 ч 40 м", "7.6", "6.4", "animation", "Приключения, семейный"],
    ["Дикий робот", "The Wild Robot", 2024, "Анимация", "Крис Сандерс", "США", "1 ч 42 м", "8.7", "8.2", "animation", "Приключения, драма"],
    ["ВАЛЛИ-И", "WALL-E", 2008, "Анимация", "Эндрю Стэнтон", "США", "1 ч 38 м", "8.9", "8.4", "animation", "Фантастика, семейный"],
    ["Изгоняющий дьявола: Верующие", "The Exorcist: Believer", 2023, "Ужасы", "Дэвид Гордон Грин", "США", "1 ч 51 м", "6.8", "4.8", "horror", "Триллер"],
    ["Улыбка 2", "Smile 2", 2024, "Ужасы", "Паркер Финн", "США", "2 ч 7 м", "7.5", "6.5", "horror", "Триллер"],
    ["Еретик", "Heretic", 2024, "Триллер", "Скотт Бек, Брайан Вудс", "США", "1 ч 51 м", "7.8", "7.0", "thriller", "Ужасы, драма"],
    ["Субстанция", "The Substance", 2024, "Ужасы", "Корали Фаржа", "Великобритания, Франция", "2 ч 21 м", "7.8", "7.3", "horror", "Драма, фантастика"],
    ["Гражданская война", "Civil War", 2024, "Боевик", "Алекс Гарленд", "США, Великобритания", "1 ч 49 м", "7.8", "7.0", "action", "Триллер, драма"],
    ["Падение империи", "Kingdom of the Planet of the Apes", 2024, "Фантастика", "Уэс Болл", "США", "2 ч 25 м", "7.7", "6.9", "sci-fi", "Боевик, приключения"],
    ["Планета обезьян: Новое царство", "Kingdom of the Planet of the Apes", 2024, "Фантастика", "Уэс Болл", "США", "2 ч 25 м", "7.7", "6.9", "sci-fi", "Боевик, приключения"],
    ["Миссия невыполнима: Финальная расплата", "Mission: Impossible - The Final Reckoning", 2025, "Боевик", "Кристофер Маккуорри", "США", "2 ч 49 м", "8.0", "7.2", "action", "Триллер, приключения"],
    ["F1", "F1", 2025, "Боевик", "Джозеф Косински", "США", "2 ч 35 м", "8.2", "7.8", "action", "Драма, спорт"],
    ["Супермен", "Superman", 2025, "Фантастика", "Джеймс Ганн", "США", "2 ч 9 м", "8.0", "7.5", "sci-fi", "Боевик, приключения"],
    ["Фантастическая четвёрка: Первые шаги", "The Fantastic Four: First Steps", 2025, "Фантастика", "Мэтт Шекман", "США", "1 ч 55 м", "8.0", "7.3", "sci-fi", "Боевик, драма"],
    ["Громовержцы*", "Thunderbolts*", 2025, "Боевик", "Джейк Шрейер", "США", "2 ч 6 м", "8.0", "7.5", "action", "Фантастика"],
    ["Minecraft в кино", "A Minecraft Movie", 2025, "Приключения", "Джаред Хесс", "США, Швеция", "1 ч 41 м", "7.4", "5.8", "adventure", "Фэнтези, комедия"],
    ["Как приручить дракона", "How to Train Your Dragon", 2025, "Приключения", "Дин ДеБлуа", "США", "2 ч 5 м", "8.0", "7.8", "adventure", "Фэнтези, семейный"],
    ["Баллада о маленьком игроке", "The Ballad of a Small Player", 2025, "Драма", "Эдвард Бергер", "Великобритания", "1 ч 41 м", "7.4", "6.8", "drama", "Триллер"],
    ["Анора", "Anora", 2024, "Драма", "Шон Бейкер", "США", "2 ч 19 м", "8.0", "7.7", "drama", "Комедия, мелодрама"],
    ["Конклав", "Conclave", 2024, "Триллер", "Эдвард Бергер", "Великобритания, США", "2 ч", "8.0", "7.4", "thriller", "Драма, детектив"],
    ["Боб Дилан: Никому не известный", "A Complete Unknown", 2024, "Драма", "Джеймс Мэнголд", "США", "2 ч 20 м", "7.8", "7.4", "drama", "Биография, музыка"],
    ["Омерзительная пятёрка", "The Ministry of Ungentlemanly Warfare", 2024, "Боевик", "Гай Ричи", "США, Великобритания", "2 ч", "7.8", "6.8", "action", "Комедия, война"],
    ["Каскадёры", "The Fall Guy", 2024, "Боевик", "Дэвид Литч", "США", "2 ч 6 м", "7.9", "6.8", "action", "Комедия, мелодрама"],
    ["Достать ножи: Проснись, мертвец", "Wake Up Dead Man: A Knives Out Mystery", 2025, "Триллер", "Райан Джонсон", "США", "2 ч 15 м", "8.0", "7.4", "thriller", "Детектив, драма"],
    ["Лило и Стич", "Lilo & Stitch", 2025, "Приключения", "Дин Флейшер Кэмп", "США", "1 ч 48 м", "7.8", "7.2", "adventure", "Комедия, семейный"],
    ["Как взломать кита", "The Whale", 2022, "Драма", "Даррен Аронофски", "США", "1 ч 57 м", "8.0", "7.6", "drama", ""],
    ["Бэтмен", "The Batman", 2022, "Боевик", "Мэтт Ривз", "США", "2 ч 56 м", "8.2", "7.8", "action", "Драма, криминал"],
    ["Социальная сеть", "The Social Network", 2010, "Драма", "Дэвид Финчер", "США", "2 ч", "8.0", "7.8", "drama", "Биография, история"],
    ["Социальная расплата", "The Accountant 2", 2025, "Боевик", "Гэвин О'Коннор", "США", "2 ч 4 м", "7.8", "6.8", "action", "Триллер"],
    ["Социальная дилемма", "The Social Dilemma", 2020, "Документальный", "Джефф Орловски", "США", "1 ч 34 м", "7.7", "7.6", "drama", "Документальный"]
];

const movieDetails = {};
const kinopoiskIconMarkup = "<svg class=\"rating-kp-svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-label=\"КиноПоиск\"><path d=\"M12.049 0C5.45 0 .104 5.373.104 12S5.45 24 12.049 24c3.928 0 7.414-1.904 9.592-4.844l-9.803-5.174 6.256 6.418h-3.559l-4.373-6.086V20.4h-2.89V3.6h2.89v6.095L14.535 3.6h3.559l-6.422 6.627 9.98-5.368C19.476 1.911 15.984 0 12.05 0zm10.924 7.133-9.994 4.027 10.917-.713a11.963 11.963 0 0 0-.923-3.314zm-10.065 5.68 10.065 4.054c.458-1.036.774-2.149.923-3.314l-10.988-.74z\"></path></svg>";
const localPosters = {
    "Человек-паук: Новый день": "poster1.png",
    "Одиссея": "poster2.png",
    "Тёмный рыцарь": "poster3.png",
    "Интерстеллар": "poster4.png",
    "1+1": "poster5.png",
    "Дюна: Часть вторая": "Снимок экрана 2026-09-21 040643.png",
    "Оппенгеймер": "Снимок экрана 2026-09-21 040711.png",
    "Барби": "Снимок экрана 2026-09-21 040726.png",
    "Гладиатор 2": "Снимок экрана 2026-09-21 040753.png",
    "Веном: Последний танец": "Снимок экрана 2026-09-21 040808.png",
    "Дэдпул и Росомаха": "Снимок экрана 2026-09-21 040825.png",
    "Головоломка 2": "Снимок экрана 2026-09-21 040840.png",
    "Гадкий я 4": "Снимок экрана 2026-09-21 040856.png",
    "Моана 2": "Снимок экрана 2026-09-21 041004.png",
    "Дикий робот": "Снимок экрана 2026-09-21 041028.png",
    "ВАЛЛИ-И": "Снимок экрана 2026-09-21 041050.png",
    "Изгоняющий дьявола: Верующие": "Снимок экрана 2026-09-21 041113.png",
    "Улыбка 2": "Снимок экрана 2026-09-21 041209.png",
    "Еретик": "Снимок экрана 2026-09-21 041236.png",
    "Субстанция": "Снимок экрана 2026-09-21 041316.png",
    "Падение империи": "Снимок экрана 2026-09-21 044620.png"
    ,"Фуриоса: Хроники Безумного Макса": "Снимок экрана 2026-09-21 042735.png"
    ,"Миссия невыполнима: Финальная расплата": "Снимок экрана 2026-09-21 042810.png"
    ,"Супермен": "Снимок экрана 2026-09-21 042836.png"
    ,"Фантастическая четвёрка: Первые шаги": "Снимок экрана 2026-09-21 042855.png"
    ,"Боб Дилан: Никому не известный": "Снимок экрана 2026-09-21 042914.png"
    ,"Каскадёры": "Снимок экрана 2026-09-21 042932.png"
    ,"Достать ножи: Проснись, мертвец": "Снимок экрана 2026-09-21 043028.png"
    ,"Лило и Стич": "Снимок экрана 2026-09-21 043042.png"
    ,"Социальная сеть": "Снимок экрана 2026-09-21 043108.png"
    ,"Социальная расплата": "Снимок экрана 2026-09-21 043151.png"
    ,"Социальная дилемма": "Снимок экрана 2026-09-21 043207.png"
    ,"Планета обезьян: Новое царство": "Снимок экрана 2026-09-21 044620.png"
    ,"F1": "Снимок экрана 2026-09-21 044648.png"
    ,"Minecraft в кино": "Снимок экрана 2026-09-21 044706.png"
    ,"Громовержцы*": "Снимок экрана 2026-09-21 044724.png"
    ,"Как приручить дракона": "Снимок экрана 2026-09-21 044752.png"
    ,"Баллада о маленьком игроке": "Снимок экрана 2026-09-21 044807.png"
    ,"Анора": "Снимок экрана 2026-09-21 044828.png"
    ,"Конклав": "Снимок экрана 2026-09-21 044837.png"
    ,"Омерзительная пятёрка": "Снимок экрана 2026-09-21 044857.png"
    ,"Бэтмен": "Снимок экрана 2026-09-21 044927.png"
    ,"Твоя вина: Лондон": "poster_youfauly.png"
    ,"Майкл": "michael_poster.png"
    ,"Холод": "xolod_poster.png"
    ,"Гражданская война": "Снимок экрана 2026-09-21 050355.png"
};

function getLocalPosterUrl(title) {
    return localPosters[title]
        ? encodeURI("images/" + localPosters[title])
        : "";
}

function createLocalPoster(title, year, genre, index) {
    const palette = ["#32145f", "#123d5b", "#5a202d", "#174d4a", "#51351a", "#30234c"];
    const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const titleParts = safeTitle.match(/.{1,18}(?:\s|$)/g) || [safeTitle];
    const titleLines = titleParts.slice(0, 4).map(function (line, lineIndex) {
        return "<text x=\"34\" y=\"" + (420 + lineIndex * 34) + "\" class=\"title\">" + line.trim() + "</text>";
    }).join("");
    const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"900\" viewBox=\"0 0 600 900\"><defs><linearGradient id=\"bg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"" + palette[index % palette.length] + "\"/><stop offset=\"1\" stop-color=\"#0b0714\"/></linearGradient><filter id=\"glow\"><feGaussianBlur stdDeviation=\"45\"/></filter></defs><rect width=\"600\" height=\"900\" fill=\"url(#bg)\"/><circle cx=\"480\" cy=\"210\" r=\"170\" fill=\"#a855f7\" opacity=\".22\" filter=\"url(#glow)\"/><path d=\"M0 650 Q220 520 600 650 V900 H0Z\" fill=\"#07050d\" opacity=\".8\"/><text x=\"34\" y=\"58\" class=\"meta\">VIBE / " + String(year) + "</text><text x=\"34\" y=\"96\" class=\"genre\">" + genre.toUpperCase() + "</text>" + titleLines + "<style>.meta{fill:#d7c8ff;font:700 18px Arial;letter-spacing:3px}.genre{fill:#ffb35c;font:700 15px Arial;letter-spacing:2px}.title{fill:#fff;font:900 30px Arial;letter-spacing:1px}</style></svg>";
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

catalogMovies.forEach(function (movie, index) {
    const title = movie[0];
    const tags = [movie[3].toLowerCase()].concat(movie[10] ? movie[10].split(", ").map(function (tag) { return tag.toLowerCase(); }) : []);
    movieDetails[title] = {
        original: movie[1], poster: "catalog-poster-" + index, type: "ФИЛЬМ", kp: movie[7], imdb: movie[8],
        director: movie[4], year: String(movie[2]), country: movie[5], duration: movie[6], tags: tags,
        description: "Популярный фильм " + movie[2] + " года о героях, которым приходится сделать сложный выбор и пройти испытание, меняющее их жизнь.",
        posterUrl: getLocalPosterUrl(title) || createLocalPoster(title, movie[2], movie[3], index),
        videoUrl: movie[11] || ""
    };
});

const movieIndex = catalogMovies.map(function (movie) {
    return {
        title: movie[0], original: movie[1], year: String(movie[2]), type: "Фильм",
        genre: movie[3], kp: movie[7], imdb: movie[8], posterUrl: movieDetails[movie[0]].posterUrl
    };
});

function searchMovieDatabase(query) {
    const normalizedQuery = query.trim().toLocaleLowerCase("ru");
    if (!normalizedQuery) return [];
    return movieIndex.filter(function (movie) {
        return (movie.title + " " + movie.original + " " + movie.genre)
            .toLocaleLowerCase("ru")
            .includes(normalizedQuery);
    }).slice(0, 8);
}

function renderSearchResults(input, resultsElement) {
    if (!input || !resultsElement) return;
    const results = searchMovieDatabase(input.value);
    resultsElement.innerHTML = "";
    if (!input.value.trim()) {
        resultsElement.classList.remove("is-visible");
        return;
    }

    if (!results.length) {
        const empty = document.createElement("p");
        empty.className = "search-results-empty";
        empty.textContent = "Фильм не найден";
        resultsElement.appendChild(empty);
    } else {
        results.forEach(function (movie) {
            const result = document.createElement("button");
            result.type = "button";
            result.className = "search-result";
            result.dataset.movieTitle = movie.title;

            const poster = document.createElement("span");
            poster.className = "search-result-poster";
            poster.style.backgroundImage = "url('" + movie.posterUrl + "')";

            const content = document.createElement("span");
            content.className = "search-result-content";
            const title = document.createElement("strong");
            title.textContent = movie.title;
            const meta = document.createElement("small");
            meta.textContent = movie.year + " · " + movie.type;

            const ratings = document.createElement("span");
            ratings.className = "search-result-ratings";
            ratings.innerHTML = "<span class=\"catalog-rating-kp\">" + kinopoiskIconMarkup + "<strong>" + movie.kp + "</strong></span><span class=\"catalog-rating-imdb\"><b class=\"rating-imdb-icon\">IMDb</b><strong>" + movie.imdb + "</strong></span>";

            content.appendChild(title);
            content.appendChild(meta);
            result.appendChild(poster);
            result.appendChild(content);
            result.appendChild(ratings);
            resultsElement.appendChild(result);
        });
    }
    resultsElement.classList.add("is-visible");
}

function setupDatabaseSearch() {
    document.querySelectorAll("input[placeholder='Поиск по названию']").forEach(function (input) {
        const resultsElement = input.parentElement.querySelector(".search-results");
        if (!resultsElement) return;
        input.addEventListener("focus", function () {
            renderSearchResults(input, resultsElement);
        });
        input.addEventListener("input", function () {
            renderSearchResults(input, resultsElement);
        });
        resultsElement.addEventListener("click", function (event) {
            const result = event.target.closest(".search-result");
            if (!result) return;
            input.value = result.dataset.movieTitle;
            resultsElement.classList.remove("is-visible");
            openMovieDetails(result.dataset.movieTitle);
        });
    });
}

function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = "";
    catalogMovies.forEach(function (movie, index) {
        const card = document.createElement("article");
        card.className = "catalog-card";
        card.dataset.type = "movie";
        card.dataset.genre = movie[9];
        card.dataset.year = String(movie[2]);
        card.dataset.rating = movie[7];
        card.dataset.popularity = String(index + 1);
        card.dataset.title = movie[0].toLowerCase();
        card.dataset.original = movie[1].toLowerCase();
        card.dataset.movieTitle = movie[0];

        const poster = document.createElement("div");
        poster.className = "catalog-poster";
        poster.style.backgroundImage = "url('" + movieDetails[movie[0]].posterUrl + "')";
        poster.innerHTML = "<div class=\"catalog-rating\"><span class=\"catalog-rating-kp\">" + kinopoiskIconMarkup + "<strong>" + movie[7] + "</strong></span><span class=\"catalog-rating-imdb\"><b class=\"rating-imdb-icon\">IMDb</b><strong>" + movie[8] + "</strong></span></div>";

        const title = document.createElement("h2");
        title.textContent = movie[0];
        const category = document.createElement("span");
        category.className = "catalog-category";
        category.textContent = movie[3] + (movie[10] ? " · " + movie[10].split(", ")[0] : "");
        const facts = document.createElement("p");
        facts.textContent = movie[2] + " · " + movie[5];

        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(facts);
        catalogGrid.appendChild(card);
    });
}

function applyHomeMoviePosters() {
    document.querySelectorAll(".movie-card").forEach(function (card) {
        const titleElement = card.querySelector(".movie-title");
        const posterElement = card.querySelector(".movie-poster");
        const details = titleElement ? movieDetails[titleElement.textContent.trim()] : null;
        if (posterElement && details) {
            posterElement.style.setProperty("background-image", "url('" + details.posterUrl + "')", "important");
            posterElement.style.backgroundSize = "cover";
            posterElement.style.backgroundPosition = "center";
        }
    });
}

const featuredSlides = [
    {
        title: "Человек-паук: Новый день",
        image: "images/poster1.png",
        description: "Одинокий и повзрослевший Питер Паркер полностью посвящает себя борьбе с преступностью.",
        genre: "фантастика",
        year: "2026"
    },
    {
        title: "Твоя вина: Лондон",
        image: "images/poster_youfauly.png",
        description: "Новая история любви, в которой расстояние, ошибки прошлого и большой город проверяют чувства героев.",
        genre: "драма",
        year: "2025"
    },
    {
        title: "Майкл",
        image: "images/michael_poster.png",
        description: "История музыканта, чей голос, движение и талант изменили мировую сцену навсегда.",
        genre: "биография · музыка",
        year: "2025"
    },
    {
        title: "Холод",
        image: "images/xolod_poster.png",
        description: "В закрытом мире, где каждый шаг оставляет след, героиня пытается сохранить свободу и себя.",
        genre: "триллер",
        year: "2025"
    }
];

function setFeaturedSlide(index, restartTimer) {
    if (!featuredMovie || !featuredSlides[index]) return;
    const slide = featuredSlides[index];
    activeFeaturedTitle = slide.title;
    featuredMovie.dataset.slide = String(index);
    if (featuredBackground) {
        featuredBackground.style.opacity = "0";
        featuredBackground.style.setProperty("background-image", "url('" + slide.image + "')", "important");
        window.requestAnimationFrame(function () {
            featuredBackground.style.opacity = "1";
        });
    }
    if (featuredTitle) {
        const titleParts = slide.title.split(": ");
        featuredTitle.innerHTML = titleParts.length > 1
            ? titleParts[0] + ":<br><span class=\"accent\">" + titleParts[1] + "</span>"
            : slide.title;
    }
    if (featuredDescription) featuredDescription.textContent = slide.description;
    if (featuredGenre) featuredGenre.textContent = slide.genre;
    if (featuredYear) featuredYear.textContent = slide.year;
    if (featuredKp) featuredKp.textContent = slide.kp || "8.0";
    if (featuredImdb) featuredImdb.textContent = slide.imdb || "7.8";
    featuredDots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
    });
    if (restartTimer) {
        clearInterval(featuredTimer);
        featuredTimer = setInterval(function () {
            setFeaturedSlide((index + 1) % featuredSlides.length, false);
        }, 6000);
    }
}

featuredDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        setFeaturedSlide(index, true);
    });
    dot.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setFeaturedSlide(index, true);
        }
    });
});

if (featuredMovie) {
    let touchStartX = 0;
    featuredMovie.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    featuredMovie.addEventListener("touchend", function (event) {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) < 45) return;
        const direction = distance < 0 ? 1 : -1;
        const currentIndex = Number(featuredMovie.dataset.slide || 0);
        setFeaturedSlide((currentIndex + direction + featuredSlides.length) % featuredSlides.length, true);
    }, { passive: true });
}

setFeaturedSlide(0, true);
function openMovieDetails(title) {
    const details = movieDetails[title] || movieDetails[catalogMovies[0][0]];
    if (!detailPage) return;

    document.querySelectorAll(".search-results.is-visible").forEach(function (resultsElement) {
        resultsElement.classList.remove("is-visible");
    });
    document.querySelectorAll("input[placeholder='Поиск по названию']").forEach(function (input) {
        input.blur();
    });

    if (homePage) homePage.classList.add("hidden");
    if (catalogPage) catalogPage.classList.add("hidden");
    if (roomsPage) roomsPage.classList.add("hidden");
    if (watchPage) watchPage.classList.add("hidden");
    if (roomModal) roomModal.classList.remove("show");

    detailPage.classList.remove("hidden");
    document.body.style.overflow = "";
    detailPage.dataset.poster = details.poster;
    detailTitle.textContent = title;
    detailOriginalTitle.textContent = details.original;
    detailKicker.textContent = details.type;
    detailKp.textContent = details.kp;
    detailImdb.textContent = details.imdb;
    detailDirector.textContent = details.director;
    detailYear.textContent = details.year;
    detailCountry.textContent = details.country;
    detailDuration.textContent = details.duration;
    detailDescription.textContent = details.description;
    detailPoster.className = "detail-poster " + details.poster;
    detailPoster.style.backgroundImage = "url('" + details.posterUrl + "')";
    detailTags.innerHTML = details.tags.map(function (tag) {
        return "<span>" + tag + "</span>";
    }).join("");
    document.title = "VIBE — " + title;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMovieDetails() {
    if (detailPage) detailPage.classList.add("hidden");
    if (homePage) homePage.classList.remove("hidden");
    document.title = "VIBE — Смотри вместе";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeCatalogPage() {
    if (catalogPage) catalogPage.classList.add("hidden");

    const homePage = document.getElementById("homePage");
    if (homePage) homePage.classList.remove("hidden");

    document.body.style.overflow = "";
    document.title = "VIBE — Смотри вместе";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeRoomsPage() {
    if (roomsPage) roomsPage.classList.add("hidden");

    const homePage = document.getElementById("homePage");
    if (homePage) homePage.classList.remove("hidden");

    document.body.style.overflow = "";
    document.title = "VIBE — Смотри вместе";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMoviePlayer(title) {
    const details = movieDetails[title];
    if (!details || !moviePlayerModal) return;

    moviePlayerModal.classList.remove("hidden");
    moviePlayerModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (moviePlayerArt) moviePlayerArt.style.backgroundImage = "url('" + details.posterUrl + "')";
    if (moviePlayerTitle) moviePlayerTitle.textContent = title;
    if (moviePlayerMeta) moviePlayerMeta.textContent = details.year + " · " + details.original;
    if (moviePlayerScreenTitle) moviePlayerScreenTitle.textContent = title;
    if (moviePlayerVideo) {
        moviePlayerVideo.pause();
        moviePlayerVideo.removeAttribute("src");
        moviePlayerVideo.load();
        moviePlayerVideo.classList.remove("is-ready");
    }
    if (moviePlayerScreen) moviePlayerScreen.classList.remove("is-hidden");
    if (details.videoUrl && moviePlayerVideo) {
        moviePlayerVideo.src = details.videoUrl;
        moviePlayerVideo.classList.add("is-ready");
        if (moviePlayerScreen) moviePlayerScreen.classList.add("is-hidden");
    }
}

function closeMoviePlayer() {
    if (!moviePlayerModal) return;
    moviePlayerModal.classList.add("hidden");
    moviePlayerModal.setAttribute("aria-hidden", "true");
    if (moviePlayerVideo) moviePlayerVideo.pause();
    document.body.style.overflow = "";
}

// =====================================================
// MAIN BUTTONS
// =====================================================

// Обе кнопки главного фильма открывают его страницу подробностей
if (createRoomHero) {
    createRoomHero.addEventListener("click", function () {
        openMovieDetails(activeFeaturedTitle);
    });
}

// "Подробнее" → открыть страницу фильма
if (joinRoomHero) {
    joinRoomHero.addEventListener("click", function () {
        openMovieDetails(activeFeaturedTitle);
    });
}

if (detailBack) detailBack.addEventListener("click", closeMovieDetails);
if (detailBrand) detailBrand.addEventListener("click", function (event) {
    event.preventDefault();
    closeMovieDetails();
});
if (roomsBrand) roomsBrand.addEventListener("click", function (event) {
    event.preventDefault();
    closeRoomsPage();
});
if (detailWatchButton) detailWatchButton.addEventListener("click", function () {
    openMoviePlayer(detailTitle ? detailTitle.textContent.trim() : "");
});
if (moviePlayerClose) moviePlayerClose.addEventListener("click", closeMoviePlayer);
if (moviePlayerCloseBottom) moviePlayerCloseBottom.addEventListener("click", closeMoviePlayer);
if (moviePlayerModal) moviePlayerModal.addEventListener("click", function (event) {
    if (event.target === moviePlayerModal) closeMoviePlayer();
});
if (moviePlayerStart) moviePlayerStart.addEventListener("click", function () {
    if (moviePlayerVideo && moviePlayerVideo.src) {
        moviePlayerVideo.play();
    } else if (moviePlayerScreen) {
        moviePlayerScreen.querySelector("span").textContent = "Для просмотра нужен лицензированный источник видео";
    }
});

document.querySelectorAll(".movie-card").forEach(function (card) {
    const titleElement = card.querySelector(".movie-title");
    if (!titleElement) return;
    card.addEventListener("click", function () {
        openMovieDetails(titleElement.textContent.trim());
    });
});

if (catalogGrid) {
    catalogGrid.addEventListener("click", function (event) {
        const card = event.target.closest(".catalog-card");
        if (card && card.dataset.movieTitle) openMovieDetails(card.dataset.movieTitle);
    });
}

// Quick actions
if (quickCreate) {
    quickCreate.addEventListener("click", openRoomsPage);
}

if (quickJoin) {
    quickJoin.addEventListener("click", openRoomsPage);
}

if (openCatalog) {
    openCatalog.addEventListener("click", function () {
        openCatalogPage();
    });
}

if (catalogBack) {
    catalogBack.addEventListener("click", closeCatalogPage);
}

function applyCatalogFilters() {
    if (!catalogGrid) return;

    const type = document.getElementById("catalogType");
    const genre = document.getElementById("catalogGenre");
    const year = document.getElementById("catalogYear");
    const sort = document.getElementById("catalogSort");
    const searchQuery = catalogSearch ? catalogSearch.value.trim().toLowerCase() : "";
    const cards = Array.from(catalogGrid.querySelectorAll(".catalog-card"));

    cards.forEach(function (card) {
        const matchesType = !type || type.value === "all" || card.dataset.type === type.value;
        const matchesGenre = !genre || genre.value === "all" || card.dataset.genre === genre.value;
        const matchesYear = !year || year.value === "all" || card.dataset.year === year.value || (year.value === "2020" && Number(card.dataset.year) >= 2020);
        const matchesSearch = !searchQuery || card.dataset.title.includes(searchQuery) || card.dataset.original.includes(searchQuery);
        card.hidden = !(matchesType && matchesGenre && matchesYear && matchesSearch);
    });

    cards.sort(function (first, second) {
        if (sort && sort.value === "rating") return Number(second.dataset.rating) - Number(first.dataset.rating);
        if (sort && sort.value === "newest") return Number(second.dataset.year) - Number(first.dataset.year);
        return Number(first.dataset.popularity) - Number(second.dataset.popularity);
    });
    cards.forEach(function (card) { catalogGrid.appendChild(card); });

    const visibleCount = cards.filter(function (card) { return !card.hidden; }).length;
    if (catalogCount) catalogCount.textContent = visibleCount + " " + (visibleCount === 1 ? "фильм" : "фильмов");
    if (catalogEmpty) catalogEmpty.classList.toggle("hidden", visibleCount > 0);
}

catalogFilters.forEach(function (filter) {
    if (filter) filter.addEventListener("change", applyCatalogFilters);
});

if (catalogSearch) {
    catalogSearch.addEventListener("input", applyCatalogFilters);
}

if (catalogBrand) {
    catalogBrand.addEventListener("click", function (event) {
        event.preventDefault();
        closeCatalogPage();
    });
}

renderCatalog();
applyHomeMoviePosters();
setupDatabaseSearch();

document.addEventListener("click", function (event) {
    if (event.target.closest(".header-search, .catalog-search, .detail-search, .rooms-search, .watch-search")) return;
    document.querySelectorAll(".search-results.is-visible").forEach(function (resultsElement) {
        resultsElement.classList.remove("is-visible");
    });
});

// =====================================================
// CREATE ROOM MODAL
// =====================================================

function openRoomModal() {
    if (!roomModal) return;
    roomModal.classList.add("show");
    roomModal.setAttribute("aria-hidden", "false");
    resetRoomModal();
}

if (roomsCreateButton) {
    roomsCreateButton.addEventListener("click", openRoomModal);
}

function closeRoomModal() {
    if (!roomModal) return;
    roomModal.classList.remove("show");
    roomModal.setAttribute("aria-hidden", "true");
}

if (closeModal) {
    closeModal.addEventListener("click", closeRoomModal);
}

if (roomModal) {
    roomModal.addEventListener("click", function (event) {
        if (event.target === roomModal) closeRoomModal();
    });
}

function resetRoomModal() {
    selectedPlatform = "";
    if (roomStepPlatform) roomStepPlatform.classList.remove("hidden");
    if (roomStepVideo) roomStepVideo.classList.add("hidden");
    if (roomStepReady) roomStepReady.classList.add("hidden");

    platforms.forEach(function (platform) {
        platform.classList.remove("selected");
    });

    if (videoUrl) videoUrl.value = "";
    if (roomName) roomName.value = "";
    if (urlError) urlError.textContent = "";
}

// =====================================================
// PLATFORM SELECT
// =====================================================

platforms.forEach(function (platform) {
    platform.addEventListener("click", function () {
        selectedPlatform = platform.dataset.platform;

        platforms.forEach(function (item) {
            item.classList.remove("selected");
        });
        platform.classList.add("selected");

        if (roomStepPlatform) roomStepPlatform.classList.add("hidden");
        if (roomStepVideo) roomStepVideo.classList.remove("hidden");
        updatePlatformDescription();
    });
});

function updatePlatformDescription() {
    if (!platformDescription) return;

    if (selectedPlatform === "youtube") {
        platformDescription.textContent = "Найдите фильм или видео на YouTube и вставьте ссылку сюда.";
    } else if (selectedPlatform === "vk") {
        platformDescription.textContent = "Найдите фильм или видео в VK Видео и вставьте ссылку сюда.";
    } else if (selectedPlatform === "rutube") {
        platformDescription.textContent = "Найдите фильм или видео на RUTUBE и вставьте ссылку сюда.";
    } else {
        platformDescription.textContent = "Найдите видео и вставьте его ссылку.";
    }
}

if (openPlatform) {
    openPlatform.addEventListener("click", function () {
        let url = "";
        if (selectedPlatform === "youtube") url = "https://www.youtube.com/";
        if (selectedPlatform === "vk") url = "https://vk.com/video";
        if (selectedPlatform === "rutube") url = "https://rutube.ru/";
        if (url) window.open(url, "_blank", "noopener,noreferrer");
    });
}

if (backToPlatforms) {
    backToPlatforms.addEventListener("click", function () {
        selectedPlatform = "";
        if (roomStepVideo) roomStepVideo.classList.add("hidden");
        if (roomStepPlatform) roomStepPlatform.classList.remove("hidden");
        platforms.forEach(function (platform) {
            platform.classList.remove("selected");
        });
        if (urlError) urlError.textContent = "";
    });
}

// =====================================================
// VALIDATE & CREATE ROOM
// =====================================================

function validateVideoUrl(url) {
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.toLowerCase();

        if (selectedPlatform === "youtube") {
            return (
                host === "youtube.com" ||
                host === "www.youtube.com" ||
                host === "m.youtube.com" ||
                host === "youtu.be" ||
                host === "www.youtu.be"
            );
        }
        if (selectedPlatform === "vk") {
            return (
                host === "vk.com" ||
                host.endsWith(".vk.com") ||
                host === "vkvideo.ru" ||
                host.endsWith(".vkvideo.ru")
            );
        }
        if (selectedPlatform === "rutube") {
            return host === "rutube.ru" || host.endsWith(".rutube.ru");
        }
        return false;
    } catch (error) {
        return false;
    }
}

function getYouTubeVideoId(url) {
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.toLowerCase();

        if (
            (host === "youtube.com" || host === "www.youtube.com" || host === "m.youtube.com") &&
            parsed.searchParams.get("v")
        ) {
            return parsed.searchParams.get("v");
        }
        if (host === "youtu.be" || host === "www.youtu.be") {
            return parsed.pathname.replace(/^\/+/, "").split("/")[0];
        }
        if (host.includes("youtube.com") && parsed.pathname.startsWith("/shorts/")) {
            return parsed.pathname.split("/")[2];
        }
        if (host.includes("youtube.com") && parsed.pathname.startsWith("/embed/")) {
            return parsed.pathname.split("/")[2];
        }
    } catch (error) {
        console.error("VIBE YouTube URL error:", error);
    }
    return null;
}

function generateRoomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "VIBE-";
    for (let i = 0; i < 4; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function getPlatformName(platform) {
    if (platform === "youtube") return "YouTube";
    if (platform === "vk") return "VK Видео";
    if (platform === "rutube") return "RUTUBE";
    return "Видео";
}

if (createRoomFinal) {
    createRoomFinal.addEventListener("click", function () {
        const url = videoUrl ? videoUrl.value.trim() : "";
        const name = roomName && roomName.value.trim() ? roomName.value.trim() : "Вечер кино";

        if (!selectedPlatform) {
            if (urlError) urlError.textContent = "Сначала выберите сервис.";
            return;
        }
        if (!url) {
            if (urlError) urlError.textContent = "Вставьте ссылку на видео.";
            return;
        }
        if (!validateVideoUrl(url)) {
            if (urlError) urlError.textContent = "Ссылка не соответствует выбранному сервису.";
            return;
        }

        currentRoom = generateRoomCode();
        currentVideoUrl = url;
        currentRoomName = name;

        const roomData = {
            code: currentRoom,
            platform: selectedPlatform,
            videoUrl: currentVideoUrl,
            name: currentRoomName,
            createdAt: Date.now()
        };

        localStorage.setItem("vibe_room_" + currentRoom, JSON.stringify(roomData));

        if (generatedRoomCode) generatedRoomCode.textContent = currentRoom;
        if (createdRoomName) createdRoomName.textContent = currentRoomName;
        if (createdPlatform) createdPlatform.textContent = getPlatformName(selectedPlatform);

        if (roomStepVideo) roomStepVideo.classList.add("hidden");
        if (roomStepReady) roomStepReady.classList.remove("hidden");
    });
}

if (copyRoomCode) {
    copyRoomCode.addEventListener("click", async function () {
        if (!currentRoom) return;
        try {
            await navigator.clipboard.writeText(currentRoom);
            copyRoomCode.textContent = "Скопировано ✓";
            setTimeout(function () {
                copyRoomCode.textContent = "Копировать";
            }, 1800);
        } catch (error) {
            prompt("Скопируйте код комнаты:", currentRoom);
        }
    });
}

if (enterRoom) {
    enterRoom.addEventListener("click", function () {
        closeRoomModal();
        openWatchRoom();
    });
}

function getRoomLink() {
    if (!currentRoom) return "";
    return window.location.origin + window.location.pathname + "?room=" + encodeURIComponent(currentRoom);
}

// =====================================================
// OPEN WATCH ROOM
// =====================================================

function openWatchRoom() {
    if (!watchPage) {
        console.error("VIBE: watchPage не найден.");
        return;
    }

    const homePage = document.getElementById("homePage");
    if (homePage) homePage.classList.add("hidden");
    if (roomsPage) roomsPage.classList.add("hidden");
    if (catalogPage) catalogPage.classList.add("hidden");
    if (detailPage) detailPage.classList.add("hidden");

    watchPage.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (watchRoomCode) watchRoomCode.textContent = currentRoom;
    if (watchTitle) watchTitle.textContent = currentRoomName || "Вечер кино";
    if (watchPlatform) watchPlatform.textContent = getPlatformName(selectedPlatform);

    document.title = "VIBE — " + (currentRoomName || "Комната");
    addSystemMessage("Вы вошли в комнату.");

    if (selectedPlatform === "youtube") {
        const youtubeId = getYouTubeVideoId(currentVideoUrl);
        if (!youtubeId) {
            showVideoError("Не удалось определить YouTube-видео.");
            return;
        }
        loadYouTubeVideo(youtubeId);
        return;
    }

    showVideoMessage("Этот сервис подключим следующим этапом.");
}

function loadYouTubeVideo(videoId) {
    const placeholder = document.querySelector(".video-placeholder");
    if (!placeholder) {
        console.error("VIBE: .video-placeholder не найден.");
        return;
    }
    if (!videoId) {
        showVideoError("Не удалось определить YouTube-видео.");
        return;
    }

    placeholder.innerHTML = "";
    placeholder.style.position = "relative";
    placeholder.style.overflow = "hidden";

    const iframe = document.createElement("iframe");
    const origin = encodeURIComponent(window.location.origin);

    iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=0&controls=1&rel=0&playsinline=1&enablejsapi=1&origin=" +
        origin;

    iframe.title = "VIBE — YouTube";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;border:0;display:block;";

    placeholder.appendChild(iframe);
}

function showVideoMessage(text) {
    const placeholder = document.querySelector(".video-placeholder");
    if (!placeholder) return;

    placeholder.innerHTML = "";
    const logo = document.createElement("div");
    logo.className = "video-v";
    logo.textContent = "V";

    const title = document.createElement("div");
    title.className = "video-placeholder-title";
    title.textContent = "VIBE";

    const message = document.createElement("div");
    message.className = "video-placeholder-text";
    message.textContent = text;

    placeholder.appendChild(logo);
    placeholder.appendChild(title);
    placeholder.appendChild(message);
}

function showVideoError(text) {
    showVideoMessage(text);
}

// =====================================================
// JOIN ROOM
// =====================================================

function askJoinRoom() {
    const code = prompt("Введите код комнаты VIBE:");
    if (!code) return;

    const cleanCode = code.trim().toUpperCase();
    const savedRoom = localStorage.getItem("vibe_room_" + cleanCode);

    if (!savedRoom) {
        alert("Комната " + cleanCode + " не найдена.");
        return;
    }

    try {
        const room = JSON.parse(savedRoom);
        currentRoom = room.code;
        selectedPlatform = room.platform;
        currentVideoUrl = room.videoUrl;
        currentRoomName = room.name || "Вечер кино";
        openWatchRoom();
    } catch (error) {
        console.error("VIBE room error:", error);
        alert("Не удалось открыть комнату.");
    }
}

// =====================================================
// BACK HOME
// =====================================================

if (backHome) {
    backHome.addEventListener("click", function () {
        if (watchPage) watchPage.classList.add("hidden");
        if (roomsPage) roomsPage.classList.add("hidden");

        const homePage = document.getElementById("homePage");
        if (homePage) homePage.classList.remove("hidden");

        document.body.style.overflow = "";
        document.title = "VIBE — Смотри вместе";
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// =====================================================
// SHARE
// =====================================================

if (inviteButton) {
    inviteButton.addEventListener("click", async function () {
        const link = getRoomLink();
        const text = "Присоединяйся к моей комнате VIBE!\n\n" + link;

        try {
            await navigator.clipboard.writeText(text);
            inviteButton.textContent = "Ссылка скопирована ✓";
            setTimeout(function () {
                inviteButton.textContent = "Поделиться";
            }, 1800);
        } catch (error) {
            prompt("Скопируйте ссылку:", link);
        }
    });
}

// =====================================================
// CHAT
// =====================================================

if (chatForm) {
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!chatInput) return;

        const text = chatInput.value.trim();
        if (!text) return;

        addChatMessage("Вы", text);
        chatInput.value = "";
    });
}

function addChatMessage(username, text) {
    if (!chatMessages) return;

    const message = document.createElement("div");
    message.className = "chat-message";

    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    avatar.textContent = username === "Вы" ? "В" : username.charAt(0).toUpperCase();

    const content = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = username;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    content.appendChild(name);
    content.appendChild(paragraph);
    message.appendChild(avatar);
    message.appendChild(content);
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addSystemMessage(text) {
    addChatMessage("VIBE", text);
}

// =====================================================
// PLAY BUTTON
// =====================================================

function focusVideo() {
    const iframe = document.querySelector(".video-player iframe");
    if (iframe) {
        iframe.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

if (playButton) playButton.addEventListener("click", focusVideo);
if (playerPlay) playerPlay.addEventListener("click", focusVideo);

// =====================================================
// ROOMS PAGE — BACK & JOIN BY LINK
// =====================================================

if (roomsBack) {
    roomsBack.addEventListener("click", closeRoomsPage);
}

if (roomLinkButton) {
    roomLinkButton.addEventListener("click", function () {
        if (!roomLinkInput) return;

        const value = roomLinkInput.value.trim();
        if (roomLinkError) roomLinkError.classList.add("hidden");

        if (!value) {
            if (roomLinkError) {
                roomLinkError.textContent = "Вставьте ссылку на комнату.";
                roomLinkError.classList.remove("hidden");
            }
            return;
        }

        let roomCode = "";
        try {
            const url = new URL(value);
            roomCode = url.searchParams.get("room") || url.searchParams.get("code") || "";
        } catch (error) {
            roomCode = value;
        }

        roomCode = roomCode.trim().toUpperCase();

        if (!roomCode && /^VIBE-[A-Z0-9]+$/i.test(value)) {
            roomCode = value.trim().toUpperCase();
        }

        if (!roomCode) {
            if (roomLinkError) {
                roomLinkError.textContent = "Неверная ссылка на комнату.";
                roomLinkError.classList.remove("hidden");
            }
            return;
        }

        const roomKey = "vibe_room_" + roomCode;
        const roomData = localStorage.getItem(roomKey);

        if (!roomData) {
            if (roomLinkError) {
                roomLinkError.textContent = "Комната не найдена. Проверьте ссылку.";
                roomLinkError.classList.remove("hidden");
            }
            return;
        }

        try {
            const room = JSON.parse(roomData);
            currentRoom = room.code;
            currentVideoUrl = room.videoUrl;
            currentRoomName = room.name || "Вечер кино";
            selectedPlatform = room.platform;
            openWatchRoom();
        } catch (error) {
            console.error("VIBE link error:", error);
            if (roomLinkError) {
                roomLinkError.textContent = "Не удалось открыть комнату.";
                roomLinkError.classList.remove("hidden");
            }
        }
    });
}

// =====================================================
// MOBILE NAVIGATION
// =====================================================

mobileNavItems.forEach(function (item) {
    item.addEventListener("click", function () {
        mobileNavItems.forEach(function (nav) {
            nav.classList.remove("active");
        });
        item.classList.add("active");

        const nav = item.dataset.nav;

        if (nav === "home") {
            closeMovieDetails();
            closeCatalogPage();
            closeRoomsPage();
            return;
        }

        if (nav === "catalog") {
            openCatalogPage();
            return;
        }

        if (nav === "rooms") {
            openRoomsPage();
            return;
        }

        if (nav === "news") {
            // Заглушка для новостей
            alert("Раздел «Новости» скоро появится!");
            return;
        }

        if (nav === "login") {
            if (authModal) authModal.classList.remove("hidden");
        }
    });
});

// =====================================================
// AUTO OPEN ROOM FROM URL
// =====================================================

function openRoomFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const roomCode = params.get("room");
    if (!roomCode) return;

    const cleanCode = roomCode.trim().toUpperCase();
    const roomData = localStorage.getItem("vibe_room_" + cleanCode);
    if (!roomData) return;

    try {
        const room = JSON.parse(roomData);
        currentRoom = room.code;
        selectedPlatform = room.platform;
        currentVideoUrl = room.videoUrl;
        currentRoomName = room.name || "Вечер кино";
        openWatchRoom();
    } catch (error) {
        console.error("VIBE URL room error:", error);
    }
}

// =====================================================
// ESC
// =====================================================

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    if (moviePlayerModal && !moviePlayerModal.classList.contains("hidden")) {
        closeMoviePlayer();
    } else if (watchPage && !watchPage.classList.contains("hidden")) {
        if (backHome) backHome.click();
    } else if (roomModal && roomModal.classList.contains("show")) {
        closeRoomModal();
    } else if (roomsPage && !roomsPage.classList.contains("hidden")) {
        closeRoomsPage();
    } else if (catalogPage && !catalogPage.classList.contains("hidden")) {
        closeCatalogPage();
    }
});



// =====================================================
// START
// =====================================================



openRoomFromUrl();
console.log("VIBE успешно запущен.");
