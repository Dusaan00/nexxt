"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../Sass/_cookieConsent.scss";

const CONSENT_STORAGE_KEY = "ploty_grygov_cookie_consent_v1";
const GTM_ID = "GTM-NNL3R8BB";
const GA_ID = "G-DL2ZB1J7Z6";

function initializeConsentMode() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function updateConsent(consent) {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: consent === "accepted" ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function loadGoogleTags() {
  if (window.__plotyGrygovGoogleTagsLoaded) {
    return;
  }

  window.__plotyGrygovGoogleTagsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtmScript);

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gaScript);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    anonymize_ip: true,
  });
}

function deleteCookie(name) {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const baseDomain =
    domainParts.length > 1 ? `.${domainParts.slice(-2).join(".")}` : hostname;
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";

  document.cookie = `${name}=; expires=${expires}; path=/`;
  document.cookie = `${name}=; expires=${expires}; path=/; domain=${hostname}`;
  document.cookie = `${name}=; expires=${expires}; path=/; domain=${baseDomain}`;
}

function clearAnalyticsCookies() {
  const gaContainerSuffix = GA_ID.replace("G-", "");

  ["_ga", `_ga_${gaContainerSuffix}`, "_gid", "_gat"].forEach(deleteCookie);
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [savedConsent, setSavedConsent] = useState(null);

  useEffect(() => {
    initializeConsentMode();

    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (storedConsent === "accepted") {
      setSavedConsent(storedConsent);
      updateConsent("accepted");
      loadGoogleTags();
      return;
    }

    if (storedConsent === "rejected") {
      setSavedConsent(storedConsent);
      updateConsent("rejected");
      clearAnalyticsCookies();
      return;
    }

    setIsVisible(true);
  }, []);

  const handleChoice = (choice) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    setSavedConsent(choice);
    updateConsent(choice);

    if (choice === "accepted") {
      loadGoogleTags();
    } else {
      clearAnalyticsCookies();
    }

    setIsVisible(false);
  };

  return (
    <>
      {isVisible ? (
        <section
          className="cookie-consent"
          aria-label="Nastavení cookies"
          role="dialog"
        >
          <div className="cookie-consent__content">
            <p className="cookie-consent__eyebrow">Nastavení cookies</p>
            <h2>Cookies na webu Ploty Grygov</h2>
            <p>
              Tento web používá soubory cookies k zajištění fungování webu a
              analýze návštěvnosti. Prohlížením našich stránek souhlasíte s
              jejich použitím.
            </p>
          </div>

          <div className="cookie-consent__actions">
            <button
              type="button"
              className="cookie-consent__button cookie-consent__button--secondary"
              onClick={() => handleChoice("rejected")}
            >
              Odmítnout
            </button>
            <button
              type="button"
              className="cookie-consent__button cookie-consent__button--primary"
              onClick={() => handleChoice("accepted")}
            >
              Povolit
            </button>
          </div>
        </section>
      ) : null}

      {savedConsent ? (
        <button
          type="button"
          className="cookie-consent__manage"
          onClick={() => setIsVisible(true)}
        >
          Cookies
        </button>
      ) : null}
    </>
  );
}

export default CookieConsent;
