import React from "react";
import { useRouter } from "next/router";
import { ar } from "../../locales/ar";
import { en } from "../../locales/en";

export const Typography = () => {
    const router = useRouter();

    const { locale } = router;

    const handelLanguageToggle = () => {
        switch (locale) {
            case "ar":
                router.push("/", "/", { locale: "en" });
                break;
            case "en":
                router.push("/", "/", { locale: "ar" });
                break;
        }
    };
    const t = locale === "en" ? en : ar;
    return (
        <h1 onClick={handelLanguageToggle}>
            toggle to change language : {t?.Hello || "WTF"}
        </h1>
    );
};
