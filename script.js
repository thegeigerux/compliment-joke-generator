const contentBanks = {
        compliment: [
          "You have a steady kind of brilliance that makes things feel calmer the moment you show up.",
          "Your presence has the emotional equivalent of good lighting and a clean playlist.",
          "You make effort look graceful, even when life is clearly being a little dramatic.",
          "You have the rare ability to make people feel seen without making it a big performance.",
          "Your brain is doing some very elegant work behind the scenes, and it shows.",
          "You carry a quiet kind of strength that people trust almost instantly.",
          "You are proof that warmth and depth can exist in the same sentence.",
          "There is something deeply reassuring about the way you move through the world.",
          "Your taste is suspiciously good. Like, annoyingly refined in the best way.",
          "You make thoughtful look cool, which is honestly a public service.",
          "You have the kind of energy that makes people unclench a little.",
          "The way you care has texture. It feels real, not performative.",
          "You are more impactful than you probably realize on your tired days.",
          "You make intelligence feel welcoming instead of intimidating.",
          "You have a low-key magnetic quality that sneaks up on people.",
          "Your resilience has style. Not loud, not forced, just solid.",
          "You make ordinary interactions feel a little more human.",
          "You have a beautifully specific spark. Not generic, not copy-paste. Fully yours.",
          "You seem like the kind of person who makes even awkward moments survivable.",
          "Your perspective adds depth to rooms that would otherwise feel flatter.",
          "You are quietly unforgettable, which is somehow even more impressive.",
          "You bring the kind of energy that says, we are going to figure this out.",
          "You have a comforting kind of confidence. Strong, but never showy.",
          "You make sincerity feel refreshing instead of cheesy. That is a gift.",
          "Your existence improves the vibe more than most people’s entire personality strategy.",
          "You have a way of making people feel less alone without needing a grand speech.",
          "You look like someone who has survived a lot and still kept your softness.",
          "Your mind clearly has range, and your heart somehow kept up.",
          "You have the emotional equivalent of a perfectly timed deep breath.",
          "You are the kind of person people remember when they need hope with better branding.",
          "You have excellent instincts, and the nerve to actually trust them.",
          "You make competence look way less boring than most people manage.",
          "Your kindness has backbone. That combo is rare.",
          "You bring order to chaos without making everyone feel managed.",
          "You have a talent for making people feel safe and capable at the same time.",
          "You are wonderfully hard to reduce to one label, which usually means you are interesting in all the right ways.",
          "You somehow feel grounded and full of possibility at once.",
          "You make good judgment look effortless, which is frankly a flex.",
          "You have the sort of presence that improves meetings and group chats alike.",
          "Your humor feels intelligent, which is always a little dangerous in a very good way.",
          "You make careful thinking feel like a strength instead of a delay.",
          "You have the kind of self-awareness people usually only pretend to have.",
          "Your voice carries more weight than you give it credit for.",
          "You are very good at being both real and reassuring, which is rarer than it should be.",
          "You have strong main-character energy, but in a way that still leaves room for other people.",
          "You make curiosity look elegant.",
          "You seem like someone who notices the details that actually matter.",
          "You bring a clean kind of clarity to messy situations.",
          "You have a surprisingly powerful calm to you.",
          "You make smart decisions without needing applause afterward.",
          "There is a steadiness to you that people probably lean on more than they say.",
          "You have the kind of charm that does not need to announce itself.",
          "You make empathy feel practical, not performative.",
          "You are good at building trust without turning it into a whole campaign.",
          "Your standards are high, and somehow still humane. Love that for you.",
          "You have a way of making people feel more like themselves around you.",
          "You are thoughtful without being heavy, and warm without being vague.",
          "You make discernment look attractive.",
          "Your ability to stay kind without becoming flimsy is deeply impressive.",
          "You bring more substance than noise, which is a relief.",
          "You have a very convincing combination of depth, wit, and follow-through.",
          "You make good taste feel less like a luxury and more like a mindset.",
          "You have the sort of focus that makes other people want to get it together.",
          "You feel like proof that composure and personality can absolutely coexist.",
          "You make being reliable seem almost glamorous.",
          "You have the kind of presence that makes people listen a little closer.",
          "You somehow manage to be both polished and deeply human.",
          "You make thoughtful boundaries look like an art form.",
          "Your perspective feels earned, not borrowed.",
          "You are excellent at bringing warmth into spaces that could have stayed cold.",
          "You have a rare gift for making people feel respected, not just included.",
          "You make competence feel comforting.",
          "There is something about your energy that feels both sharp and kind.",
          "You are quietly setting a better standard just by being yourself.",
          "You have the kind of integrity that makes everything around you feel a little more solid."
        ],
        joke: [
          "Why don’t skeletons fight each other? They don’t have the guts.",
          "I tried to organize a hide-and-seek tournament, but good players are really hard to find.",
          "My phone battery lasts longer than most of my plans.",
          "I told my plants a joke. Now they just need time to process it.",
          "Why did the scarecrow get promoted? He was outstanding in his field.",
          "I’m not saying I procrastinate, but my to-do list has started aging in dog years.",
          "I used to play piano by ear, but now I use my hands.",
          "Parallel lines have so much in common. It’s a shame they’ll never meet.",
          "I asked the moon for advice. It said I should work on my phases.",
          "My cooking style is mostly just optimistic stirring.",
          "Why don’t eggs tell secrets? Too easy to crack.",
          "I named my Wi-Fi TellMyDogISaidHi. It feels more personal now.",
          "I’m on a seafood diet. I see food, then immediately get emotionally attached.",
          "Why was the math book stressed? It had too many problems.",
          "I bought a pencil with no eraser. Bold choice. No notes.",
          "I tried to be more spontaneous, but I wanted to schedule it first.",
          "My alarm clock and I are in a very toxic relationship.",
          "Why did the tomato blush? It saw the salad dressing.",
          "I told myself I’d start being mysterious, but then I overexplained it.",
          "I’m not lazy. I’m on energy-saving mode.",
          "Why did the computer go to therapy? Too many unresolved tabs.",
          "I made a belt out of watches. It was a total waist of time.",
          "My inbox is less of a communication tool and more of a haunted house.",
          "Why did the bicycle fall over? It was two tired.",
          "I’m great at multitasking. I can worry about six things at once.",
          "The elevator and I have our ups and downs.",
          "Why did the cookie go to the doctor? It felt crummy.",
          "I tried meal prepping, but the snacks staged a coup.",
          "My houseplants are thriving mostly out of spite.",
          "Why don’t oysters donate to charity? Because they’re shellfish.",
          "I opened the fridge and forgot why. Honestly, that felt like performance art.",
          "Why did the calendar look so smug? Its days were numbered.",
          "I’m trying to be the kind of person my dog already thinks I am.",
          "The shovel was a ground-breaking invention.",
          "Why was the broom late? It swept in.",
          "I told my laptop we needed space. Now it won’t stop buffering.",
          "I’m at the age where getting a package feels like winning a tiny lottery.",
          "Why don’t scientists trust atoms? Because they make up everything.",
          "I started a band called 999 Megabytes. We still haven’t gotten a gig.",
          "My hobbies include starting fresh and calling it personal growth.",
          "Why was the stadium so cool? It was filled with fans.",
          "I told my mirror to be honest. We are no longer speaking.",
          "I’d tell you a roof joke, but it would go over your head.",
          "Why was the musician arrested? For getting into too much treble.",
          "I tried to read a book on anti-gravity. Couldn’t put it down.",
          "My attention span has several tabs open and none of them are helping.",
          "Why did the grape stop in the middle of the road? It ran out of juice.",
          "I made a joke about paper, but it was tearable.",
          "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
          "I cleaned my room and immediately lost the one thing I needed.",
          "Why don’t mountains ever get cold? They wear snowcaps.",
          "I’m not arguing. I’m just passionately overexplaining my confusion.",
          "The bakery burned down. Now the business is toast.",
          "Why did the orange stop halfway up the hill? It ran out of peel.",
          "I tried journaling, but my thoughts kept giving director’s commentary.",
          "Why did the lamp get promoted? It really knew how to brighten the room.",
          "I wanted to work out, but my blanket had strong counterarguments.",
          "Why did the soda file a complaint? It was feeling flat.",
          "My brain at 2 a.m. is basically a podcast no one asked for.",
          "Why did the cheese refuse to fight? It didn’t want things to get grated.",
          "I took a nap and woke up with a sequel.",
          "Why did the barber win the race? He knew a short cut.",
          "I’m not bad at directions. I just enjoy plot twists.",
          "Why do bees have sticky hair? Because they use honeycombs.",
          "I told my calendar to relax. It said things were fully booked.",
          "Why did the little cloud break up with the big cloud? It needed space to process.",
          "My water bottle has seen more of my life than some relatives.",
          "Why did the sandwich blush? It was in a jam.",
          "I keep buying notebooks like the next one will fix my whole life.",
          "Why did the fish get bad grades? Because it was below sea level.",
          "My weekend plans are ambitious until the couch starts making excellent points.",
          "Why did the peanut get into a rocket? It wanted to be an astro-nut.",
          "I’m in my thriving era, which currently looks a lot like hydrating and cancelling things.",
          "Why did the sock quit its job? It was tired of being under so much pressure.",
          "I told myself I’d be chill today. Then the internet loaded slowly.",
          "Why did the snail paint an S on his car? So people would say, look at that S-car-go.",
          "I love a good deadline. Especially the whooshing sound it makes as it flies by.",
          "Why did the notebook look confident? It had a lot of good lines.",
          "I’m not late. I’m just arriving with narrative tension.",
          "Why did the candle do well in school? It burned bright."
        ]
      };

      const modeConfig = {
        compliment: {
          heading: "Your compliment",
          tag: "Freshly generated",
          generateLabel: "Generate compliment",
          helperDefault: "Save the ones that hit a little too hard, in a good way.",
          helperAfter: "That one had some main-character energy.",
          loadedStatus: "Fresh compliment loaded.",
          sharedTitle: "A compliment for you",
          typeLabel: "Compliment",
          saveLabel: "Save current compliment to favorites",
          savedMessage: "Saved compliment copied."
        },
        joke: {
          heading: "Your joke",
          tag: "Freshly generated",
          generateLabel: "Generate joke",
          helperDefault: "A tiny reset button for your brain, with just enough nonsense.",
          helperAfter: "That one fully committed to the bit.",
          loadedStatus: "Fresh joke loaded.",
          sharedTitle: "A joke for you",
          typeLabel: "Joke",
          saveLabel: "Save current joke to favorites",
          savedMessage: "Saved joke copied."
        }
      };

      const FAVORITES_KEY = "compliment-generator-favorites";
      const HISTORY_LIMIT = 10;
      const PUNCHLINE_DELAY = 2000;

      const contentHeading = document.getElementById("content-heading");
      const contentFrame = document.getElementById("content-frame");
      const contentTag = document.getElementById("content-tag");
      const contentText = document.getElementById("content-text");
      const generateBtn = document.getElementById("generate-btn");
      const copyBtn = document.getElementById("copy-btn");
      const shareBtn = document.getElementById("share-btn");
      const saveCurrentBtn = document.getElementById("save-current-btn");
      const complimentModeBtn = document.getElementById("compliment-mode-btn");
      const jokeModeBtn = document.getElementById("joke-mode-btn");
      const favoritesList = document.getElementById("favorites-list");
      const favoritesEmptyState = document.getElementById("favorites-empty-state");
      const favoritesCount = document.getElementById("favorites-count");
      const statusMessage = document.getElementById("status-message");
      const liveRegion = document.getElementById("live-region");
      const helperText = document.getElementById("helper-text");
      const counterText = document.getElementById("counter-text");
      const favoriteTemplate = document.getElementById("favorite-item-template");
      const favoritesTabAll = document.getElementById("favorites-tab-all");
      const favoritesTabCompliment = document.getElementById("favorites-tab-compliment");
      const favoritesTabJoke = document.getElementById("favorites-tab-joke");

      let currentMode = "compliment";
      let currentText = contentText.textContent.trim();
      let currentItems = {
        compliment: currentText,
        joke: null
      };
      let recentHistory = {
        compliment: [currentText],
        joke: []
      };
      let favorites = loadFavorites();
      let activeFavoritesTab = "all";
      let punchlineTimer = null;

      updateModeUI();
      contentText.innerHTML = formatTextForDisplay(currentText, currentMode);
      contentText.classList.add("show-punchline");
      updateFavoritesTabsUI();
      renderFavorites();
      updateSavedButtonState();
      updateCounter();

      function loadFavorites() {
        try {
          const storedFavorites = localStorage.getItem(FAVORITES_KEY);

          if (!storedFavorites) {
            return [];
          }

          const parsedFavorites = JSON.parse(storedFavorites);

          if (!Array.isArray(parsedFavorites)) {
            return [];
          }

          return parsedFavorites
            .map((item) => {
              if (typeof item === "string") {
                return {
                  id: `compliment:${item}`,
                  type: "compliment",
                  text: item
                };
              }

              if (item && typeof item.text === "string" && typeof item.type === "string") {
                return {
                  id: item.id || `${item.type}:${item.text}`,
                  type: item.type,
                  text: item.text
                };
              }

              return null;
            })
            .filter(Boolean);
        } catch (error) {
          console.error("Could not load favorites from localStorage.", error);
          return [];
        }
      }

      function saveFavorites() {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      }

      function getCurrentItem() {
        return {
          id: `${currentMode}:${currentText}`,
          type: currentMode,
          text: currentText
        };
      }

      function getRandomItem(mode = currentMode) {
        const history = recentHistory[mode];
        const bank = contentBanks[mode];
        const availableItems = bank.filter((item) => !history.includes(item));
        const pool = availableItems.length > 0 ? availableItems : bank;
        const randomIndex = Math.floor(Math.random() * pool.length);
        return pool[randomIndex];
      }

      function updateHistory(item, mode = currentMode) {
        recentHistory[mode].push(item);

        if (recentHistory[mode].length > HISTORY_LIMIT) {
          recentHistory[mode].shift();
        }
      }

      function showStatus(message) {
        statusMessage.textContent = message;
      }

      function updateCounter() {
        counterText.textContent = `${favorites.length} saved favorite${
          favorites.length === 1 ? "" : "s"
        }`;
      }

      function updateSavedButtonState() {
        const currentItem = getCurrentItem();
        const isSaved = favorites.some((item) => item.id === currentItem.id);
        const config = modeConfig[currentMode];

        saveCurrentBtn.classList.toggle("is-saved", isSaved);
        saveCurrentBtn.setAttribute(
          "aria-label",
          isSaved ? `Current ${currentMode} is saved in favorites` : config.saveLabel
        );
        saveCurrentBtn.setAttribute("title", isSaved ? "Already saved" : "Save this");
      }

      function updateModeUI() {
        const config = modeConfig[currentMode];
        contentHeading.textContent = config.heading;
        contentTag.textContent = config.tag;
        contentFrame.dataset.mode = currentMode;
        generateBtn.textContent = config.generateLabel;
        generateBtn.classList.toggle("mode-compliment", currentMode === "compliment");
        generateBtn.classList.toggle("mode-joke", currentMode === "joke");
        helperText.textContent = config.helperDefault;

        complimentModeBtn.classList.toggle("is-active", currentMode === "compliment");
        jokeModeBtn.classList.toggle("is-active", currentMode === "joke");
        complimentModeBtn.setAttribute("aria-pressed", String(currentMode === "compliment"));
        jokeModeBtn.setAttribute("aria-pressed", String(currentMode === "joke"));

        updateSavedButtonState();
      }

      function escapeHtml(text) {
        return text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }

      function getJokeParts(text) {
        const questionEnd = text.indexOf("?");

        if (questionEnd === -1 || questionEnd === text.length - 1) {
          return null;
        }

        const question = text.slice(0, questionEnd + 1);
        const punchline = text.slice(questionEnd + 1).trim();

        if (!punchline) {
          return null;
        }

        return { question, punchline };
      }

      function formatTextForDisplay(text, type, { delayedPunchline = false } = {}) {
        const safeText = escapeHtml(text);

        if (type !== "joke") {
          return safeText;
        }

        const jokeParts = getJokeParts(text);

        if (!jokeParts) {
          return safeText;
        }

        if (delayedPunchline) {
          return `<strong>${escapeHtml(jokeParts.question)}</strong> <span class="punchline"><em>${escapeHtml(jokeParts.punchline)}</em></span>`;
        }

        return `<strong>${escapeHtml(jokeParts.question)}</strong> <em>${escapeHtml(jokeParts.punchline)}</em>`;
      }

      function clearPunchlineTimer() {
        if (punchlineTimer) {
          window.clearTimeout(punchlineTimer);
          punchlineTimer = null;
        }
      }

      function setContent(newText, { announce = true, animate = true } = {}) {
        clearPunchlineTimer();
        contentText.classList.remove("show-punchline");

        if (animate) {
          contentText.classList.remove("is-visible");
        }

        window.setTimeout(() => {
          currentText = newText;
          currentItems[currentMode] = newText;

          const shouldDelayPunchline =
            currentMode === "joke" &&
            Boolean(getJokeParts(newText)) &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          contentText.innerHTML = formatTextForDisplay(newText, currentMode, {
            delayedPunchline: shouldDelayPunchline
          });
          contentText.classList.add("is-visible");

          if (shouldDelayPunchline) {
            punchlineTimer = window.setTimeout(() => {
              contentText.classList.add("show-punchline");
              punchlineTimer = null;
            }, PUNCHLINE_DELAY);
          } else {
            contentText.classList.add("show-punchline");
          }

          if (announce) {
            liveRegion.textContent = `New ${currentMode}: ${newText}`;
          }

          updateSavedButtonState();
        }, animate ? 120 : 0);
      }

      function updateFavoritesTabsUI() {
        const tabs = {
          all: favoritesTabAll,
          compliment: favoritesTabCompliment,
          joke: favoritesTabJoke
        };

        Object.entries(tabs).forEach(([key, button]) => {
          const isActive = activeFavoritesTab === key;
          button.classList.toggle("is-active", isActive);
          button.setAttribute("aria-selected", String(isActive));
        });
      }

      function getFilteredFavorites() {
        if (activeFavoritesTab === "all") {
          return favorites;
        }

        return favorites.filter((item) => item.type === activeFavoritesTab);
      }

      function renderFavorites() {
        const filteredFavorites = getFilteredFavorites();

        favoritesList.innerHTML = "";
        favoritesCount.textContent = `${filteredFavorites.length} saved`;
        favoritesEmptyState.hidden = filteredFavorites.length > 0;

        if (filteredFavorites.length === 0) {
          if (activeFavoritesTab === "compliment") {
            favoritesEmptyState.innerHTML = `
              <p>No saved compliments yet.</p>
              <span>Save the warm ones you want to come back to.</span>
            `;
          } else if (activeFavoritesTab === "joke") {
            favoritesEmptyState.innerHTML = `
              <p>No saved jokes yet.</p>
              <span>Save the ridiculous ones worth keeping around.</span>
            `;
          } else {
            favoritesEmptyState.innerHTML = `
              <p>No favorites yet.</p>
              <span>Save compliments you want to keep, or jokes that are just the right amount of dumb.</span>
            `;
          }
        }

        filteredFavorites.forEach((item) => {
          const fragment = favoriteTemplate.content.cloneNode(true);
          const favoriteItem = fragment.querySelector(".favorite-item");
          const favoriteType = fragment.querySelector(".favorite-type");
          const favoriteText = fragment.querySelector(".favorite-text");
          const copyFavoriteBtn = fragment.querySelector(".favorite-copy");
          const removeFavoriteBtn = fragment.querySelector(".favorite-remove");

          favoriteItem.dataset.type = item.type;
          favoriteType.textContent = modeConfig[item.type]?.typeLabel || "Saved";
          favoriteText.innerHTML = formatTextForDisplay(item.text, item.type);

          copyFavoriteBtn.setAttribute("aria-label", `Copy saved ${item.type}: ${item.text}`);
          removeFavoriteBtn.setAttribute("aria-label", `Remove saved ${item.type}: ${item.text}`);

          copyFavoriteBtn.addEventListener("click", async () => {
            await copyToClipboard(item.text);
            showStatus(modeConfig[item.type]?.savedMessage || "Saved item copied.");
          });

          removeFavoriteBtn.addEventListener("click", () => {
            favorites = favorites.filter((favorite) => favorite.id !== item.id);
            saveFavorites();
            renderFavorites();
            updateSavedButtonState();
            updateCounter();
            showStatus("Removed from favorites.");
          });

          favoritesList.appendChild(fragment);
        });
      }

      async function copyToClipboard(text) {
        try {
          await navigator.clipboard.writeText(text);
        } catch (error) {
          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = text;
          document.body.appendChild(tempTextArea);
          tempTextArea.select();
          document.execCommand("copy");
          tempTextArea.remove();
        }
      }

      function saveCurrentItem() {
        const currentItem = getCurrentItem();

        if (favorites.some((item) => item.id === currentItem.id)) {
          showStatus("Already saved. Your excellent taste remains confirmed.");
          return;
        }

        favorites.unshift(currentItem);
        saveFavorites();
        renderFavorites();
        updateSavedButtonState();
        updateCounter();
        showStatus("Saved to favorites.");
      }

      function generateCurrentItem() {
        const nextItem = getRandomItem(currentMode);
        updateHistory(nextItem, currentMode);
        setContent(nextItem);
        helperText.textContent = modeConfig[currentMode].helperAfter;
        showStatus(modeConfig[currentMode].loadedStatus);
      }

      function switchMode(mode) {
        if (mode === currentMode) {
          return;
        }

        currentMode = mode;
        updateModeUI();

        if (!currentItems[mode]) {
          const initialItem = getRandomItem(mode);
          updateHistory(initialItem, mode);
          setContent(initialItem);
        } else {
          setContent(currentItems[mode], { announce: false });
        }

        showStatus(mode === "compliment" ? "Switched to compliments." : "Switched to jokes.");
      }

      generateBtn.addEventListener("click", generateCurrentItem);

      copyBtn.addEventListener("click", async () => {
        await copyToClipboard(currentText);
        showStatus(currentMode === "compliment" ? "Compliment copied to clipboard." : "Joke copied to clipboard.");
      });

      shareBtn.addEventListener("click", async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: modeConfig[currentMode].sharedTitle,
              text: currentText
            });
            showStatus(currentMode === "compliment" ? "Compliment shared." : "Joke shared.");
            return;
          } catch (error) {
            if (error.name === "AbortError") {
              showStatus("Share canceled.");
              return;
            }
          }
        }

        await copyToClipboard(currentText);
        showStatus("Share is not available here, so it was copied instead.");
      });

      saveCurrentBtn.addEventListener("click", saveCurrentItem);
      complimentModeBtn.addEventListener("click", () => switchMode("compliment"));
      jokeModeBtn.addEventListener("click", () => switchMode("joke"));
      favoritesTabAll.addEventListener("click", () => {
        activeFavoritesTab = "all";
        updateFavoritesTabsUI();
        renderFavorites();
      });
      favoritesTabCompliment.addEventListener("click", () => {
        activeFavoritesTab = "compliment";
        updateFavoritesTabsUI();
        renderFavorites();
      });
      favoritesTabJoke.addEventListener("click", () => {
        activeFavoritesTab = "joke";
        updateFavoritesTabsUI();
        renderFavorites();
      });

      window.addEventListener("keydown", (event) => {
        if (event.target.tagName === "BUTTON") {
          return;
        }

        if (event.code === "Space") {
          event.preventDefault();
          generateCurrentItem();
        }

        if (event.key.toLowerCase() === "s") {
          saveCurrentItem();
        }

        if (event.key.toLowerCase() === "c") {
          switchMode("compliment");
        }

        if (event.key.toLowerCase() === "j") {
          switchMode("joke");
        }
      });
