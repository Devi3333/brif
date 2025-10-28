import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Home, Upload, Mic2, Video, FileText, Users, Settings, Search, Sparkles, MessageSquare, Bot, Play, Pause, ListChecks, Loader2, Clock3, Shield, Database, Edit3, Info, } from "lucide-react";
document.title = "BRIF";
const APP_NAME = "BRIF";
// ------------------ MOCK DATA ------------------
const mockMeetings = [
    {
        id: "mtg-001",
        title: "Созвон по релизу v0.6",
        createdAt: "2025-10-10 14:03",
        duration: 64,
        speakers: [
            { id: "spk-1", name: "PM — Марина", color: "#3b82f6" },
            { id: "spk-2", name: "Backend — Илья", color: "#10b981" },
            { id: "spk-3", name: "Дизайн — Дима", color: "#f97316" },
        ],
        summary: "Обсудили дедлайны v0.6, риски диаризации, план на интеграцию Q&A. Приняли решение заморозить real-time до v0.7.",
        status: "done", // done | processing | failed
    },
    {
        id: "mtg-002",
        title: "Интервью с кандидатом (Data)",
        createdAt: "2025-10-09 11:20",
        duration: 42,
        speakers: [
            { id: "spk-1", name: "HR — Катя", color: "#a855f7" },
            { id: "spk-4", name: "Кандидат", color: "#22d3ee" },
        ],
        summary: "Оценили опыт в MLOps, договорились о тестовом задании и слотах на следующую неделю.",
        status: "done",
    },
    {
        id: "mtg-003",
        title: "Клиентский демо‑звонок (BankCorp)",
        createdAt: "2025-10-08 16:45",
        duration: 55,
        speakers: [
            { id: "spk-5", name: "Sales — Олег", color: "#ef4444" },
            { id: "spk-6", name: "BankCorp — Ирина", color: "#06b6d4" },
        ],
        summary: "Показали on‑prem деплой. Следующие шаги: пилот на 10 часов, SLA 99%.",
        status: "processing",
    },
];
const mockTranscript = [
    {
        id: "utt-001",
        start: 0,
        end: 9.2,
        speaker: "PM — Марина",
        text: "Коллеги, давайте начнём. Сегодня финализируем план и риски по v0.6.",
    },
    {
        id: "utt-002",
        start: 9.3,
        end: 21.4,
        speaker: "Backend — Илья",
        text: "По серверу: STT и диаризацию вынесли в отдельные контейнеры, метрики собираем в Prometheus.",
    },
    {
        id: "utt-003",
        start: 21.6,
        end: 31.1,
        speaker: "Дизайн — Дима",
        text: "По вебу — добавил редактор с группировкой по ролям, осталась панель Q&A и спикер‑риджонс.",
    },
];
// ------------------ LAYOUT ------------------
function Shell({ children }) {
    const location = useLocation();
    const [query, setQuery] = useState("");
    return (_jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-900", children: [_jsxs("aside", { className: "fixed left-0 top-0 h-full w-64 bg-white shadow-sm border-r border-slate-200 p-4 hidden md:flex md:flex-col gap-2 z-40", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Shield, { className: "h-6 w-6" }), _jsx("span", { className: "font-semibold", children: APP_NAME })] }), _jsx(NavItem, { to: "/", icon: _jsx(Home, { className: "h-4 w-4" }), children: "\u0414\u044D\u0448\u0431\u043E\u0440\u0434" }), _jsx(NavItem, { to: "/settings", icon: _jsx(Settings, { className: "h-4 w-4" }), children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" }), _jsx("div", { className: "mt-auto text-xs text-slate-500", children: "on-prem \u2022 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430" })] }), _jsxs("main", { className: "md:pl-64", children: [_jsx("header", { className: "sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center gap-3", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-slate-400" }), _jsx(Input, { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C, \u0441\u043F\u0438\u043A\u0435\u0440\u0430\u043C, \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043C\u2026", className: "pl-9" })] }), _jsx(Avatar, { className: "h-8 w-8", children: _jsx(AvatarFallback, { children: "PM" }) })] }) }), _jsx("div", { className: "max-w-7xl mx-auto p-4", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.2 }, children: children }, location.pathname) }) })] })] }));
}
function NavItem({ to, icon, children }) {
    const location = useLocation();
    const active = location.pathname === to;
    return (_jsxs(Link, { to: to, className: `flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 ${active ? "bg-slate-100 font-medium" : "text-slate-700"}`, children: [icon, _jsx("span", { children: children })] }));
}
// ------------------ PAGES ------------------
function Dashboard() {
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [_jsxs(Card, { className: "lg:col-span-2", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Sparkles, { className: "h-5 w-5" }), "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438"] }) }), _jsx(CardContent, { className: "grid gap-3", children: mockMeetings.map((m) => (_jsx(Link, { to: `/meetings/${m.id}`, className: "group", children: _jsxs("div", { className: "rounded-2xl border border-slate-200 p-4 bg-white hover:shadow-sm transition", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "font-medium", children: m.title }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [_jsx(Clock3, { className: "h-4 w-4" }), _jsxs("span", { children: [m.duration, " \u043C\u0438\u043D"] }), _jsx(Badge, { variant: "outline", className: "capitalize", children: m.status })] })] }), _jsx("p", { className: "mt-2 text-sm text-slate-600 line-clamp-2", children: m.summary }), _jsx("div", { className: "mt-3 flex gap-2", children: m.speakers.map((s) => (_jsx(Badge, { style: { backgroundColor: s.color }, className: "text-white", children: s.name }, s.id))) })] }) }, m.id))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Upload, { className: "h-5 w-5" }), "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"] }) }), _jsxs(CardContent, { children: [_jsx(UploadWidget, {}), _jsxs("div", { className: "mt-4 text-xs text-slate-500 flex items-center gap-2", children: [_jsx(Shield, { className: "h-3 w-3" }), " \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0431\u0435\u0437 \u043E\u0431\u043B\u0430\u043A\u043E\u0432"] })] })] })] }));
}
function UploadWidget() {
    const [files, setFiles] = useState([]);
    return (_jsxs("div", { className: "rounded-2xl border border-dashed border-slate-300 p-6 text-center", children: [_jsxs("div", { className: "flex justify-center mb-3", children: [_jsx(Video, { className: "h-5 w-5 mr-2" }), _jsx(Mic2, { className: "h-5 w-5" })] }), _jsx("p", { className: "text-sm text-slate-600", children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0441\u044E\u0434\u0430 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435" }), _jsxs("div", { className: "mt-4 flex justify-center gap-2", children: [_jsx(Button, { variant: "secondary", children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B" }), _jsxs(Button, { children: [_jsx(Upload, { className: "h-4 w-4 mr-2" }), "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"] })] }), files.length > 0 && (_jsx("div", { className: "mt-4 text-left", children: files.map((f) => (_jsx("div", { className: "text-xs text-slate-500", children: f.name }, f.name))) }))] }));
}
function UploadsPage() {
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u043E/\u0432\u0438\u0434\u0435\u043E" }) }), _jsxs(CardContent, { children: [_jsx(UploadWidget, {}), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [_jsx(Option, { title: "\u0414\u0438\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044F", icon: _jsx(Users, { className: "h-4 w-4" }), children: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0441\u043F\u0438\u043A\u0435\u0440\u043E\u0432 \u0438 \u0438\u0445 \u0440\u0435\u043F\u043B\u0438\u043A\u0438" }), _jsx(Option, { title: "\u0421\u0430\u043C\u043C\u0430\u0440\u0438", icon: _jsx(Bot, { className: "h-4 w-4" }), children: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043F\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0435" }), _jsx(Option, { title: "Q&A", icon: _jsx(MessageSquare, { className: "h-4 w-4" }), children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043A \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0435" })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u0437\u0430\u0434\u0430\u0447" }) }), _jsx(CardContent, { className: "space-y-2", children: mockMeetings.map((m) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border p-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(FileText, { className: "h-4 w-4" }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium", children: m.title }), _jsx("div", { className: "text-xs text-slate-500", children: m.createdAt })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Badge, { variant: "outline", className: "capitalize", children: m.status }), _jsx(Button, { variant: "secondary", size: "sm", children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C" })] })] }, m.id))) })] })] }));
}
function Option({ title, icon, children }) {
    return (_jsxs("div", { className: "rounded-2xl border p-3 bg-white", children: [_jsxs("div", { className: "flex items-center gap-2 font-medium mb-1", children: [icon, title] }), _jsx("p", { className: "text-sm text-slate-600", children: children })] }));
}
function MeetingsList() {
    return (_jsx("div", { className: "space-y-3", children: mockMeetings.map((m) => (_jsx(Link, { to: `/meetings/${m.id}`, className: "block", children: _jsxs("div", { className: "rounded-2xl border bg-white p-4 hover:shadow-sm transition", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "font-medium", children: m.title }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [_jsx(Clock3, { className: "h-4 w-4" }), _jsxs("span", { children: [m.duration, " \u043C\u0438\u043D"] }), _jsx(Badge, { variant: "outline", className: "capitalize", children: m.status })] })] }), _jsx("p", { className: "text-sm text-slate-600 mt-1 line-clamp-1", children: m.summary })] }) }, m.id))) }));
}
function MeetingDetail({ id }) {
    const navigate = useNavigate();
    const meeting = mockMeetings.find((m) => m.id === id);
    const [play, setPlay] = useState(false);
    const [rate, setRate] = useState([1]);
    const [selectedUtt, setSelectedUtt] = useState(null);
    const [text, setText] = useState(mockTranscript.map((u) => `[${fmtTime(u.start)}] ${u.speaker}: ${u.text}`).join("\n"));
    return (_jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-4", children: [_jsxs("div", { className: "xl:col-span-2 space-y-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-5 w-5" }), " ", meeting.title] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx(Button, { variant: "secondary", onClick: () => navigate(-1), children: "\u041D\u0430\u0437\u0430\u0434" }) })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "rounded-2xl border bg-slate-900 text-slate-100 p-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { size: "sm", variant: "secondary", onClick: () => setPlay((p) => !p), children: play ? _jsx(Pause, { className: "h-4 w-4" }) : _jsx(Play, { className: "h-4 w-4" }) }), _jsxs("div", { className: "w-40", children: [_jsx(Label, { className: "text-xs", children: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C" }), _jsx(Slider, { value: rate, onValueChange: setRate, min: 0.5, max: 2, step: 0.25 })] }), _jsxs(Badge, { variant: "outline", children: [meeting.duration, " \u043C\u0438\u043D"] })] }), _jsx("div", { className: "mt-3 h-2 w-full bg-slate-700 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-white/80 w-1/3" }) })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Bot, { className: "h-5 w-5" }), "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u0441\u0430\u043C\u043C\u0430\u0440\u0438"] }), _jsxs(Button, { size: "md", variant: "default", children: [_jsx(Sparkles, { className: "h-4 w-4 mr-2" }), " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0430\u043C\u043C\u0430\u0440\u0438"] })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-slate-700", children: meeting.summary }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(ListChecks, { className: "h-5 w-5" }), " \u0422\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0442"] }) }), _jsx(CardContent, { className: "p-0", children: _jsx("div", { className: "p-2 grid grid-cols-1 lg:grid-cols-3 gap-2", children: _jsx("div", { className: "col-span-full", children: _jsx("div", { className: "space-y-2 w-full", children: mockTranscript.map((u) => (_jsxs("div", { className: `w-full rounded-lg border p-2 bg-white cursor-pointer transition-all ${selectedUtt === u.id ? "ring-2 ring-sky-400 shadow-sm" : ""}`, onClick: () => setSelectedUtt(u.id), children: [_jsxs("div", { className: "flex items-center justify-between text-xs text-slate-500", children: [_jsxs("span", { children: [fmtTime(u.start), "\u2013", fmtTime(u.end)] }), _jsxs(Button, { size: "sm", variant: "secondary", className: "ml-2 h-6 px-2 py-0 text-xs flex items-center gap-1", children: [_jsx(Edit3, { className: "h-3 w-3" }), " \u041F\u0440\u0430\u0432\u0438\u0442\u044C"] })] }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx("div", { className: "h-2 w-2 rounded-full", style: { backgroundColor: colorFor(u.speaker) } }), _jsx("div", { className: "text-sm font-medium", children: u.speaker })] }), _jsx("p", { className: "text-sm mt-1", children: u.text })] }, u.id))) }) }) }) })] })] }), _jsxs(Card, { className: "xl:col-span-1", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(MessageSquare, { className: "h-5 w-5" }), "Q&A \u043F\u043E \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0442\u0443"] }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "\u0421\u043F\u0440\u043E\u0441\u0438: \u043A\u0430\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u043B\u0438\u0441\u044C?" }), _jsxs(Button, { children: [_jsx(Bot, { className: "h-4 w-4 mr-1" }), "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C"] })] }), _jsxs("div", { className: "mt-4 rounded-xl border p-3 bg-white", children: [_jsx("div", { className: "text-xs text-slate-500", children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043E\u0442\u0432\u0435\u0442\u0430" }), _jsx("p", { className: "text-sm mt-1", children: "\u00AB\u0414\u0435\u0434\u043B\u0430\u0439\u043D v0.6 \u2014 \u043F\u044F\u0442\u043D\u0438\u0446\u0430, 17:00.\u00BB" })] })] })] })] }));
}
function SpeakersPage() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [_jsxs(Card, { className: "lg:col-span-2", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "h-5 w-5" }), "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0441\u043F\u0438\u043A\u0435\u0440\u043E\u0432"] }) }), _jsx(CardContent, { className: "grid md:grid-cols-2 gap-3", children: uniqSpeakers().map((s) => (_jsx("div", { className: "rounded-2xl border p-3 bg-white", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-8 w-8 rounded-full", style: { backgroundColor: s.color } }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: s.name }), _jsxs("div", { className: "text-xs text-slate-500", children: [s.count, " \u0440\u0435\u043F\u043B\u0438\u043A"] })] }), _jsx(Button, { size: "sm", variant: "secondary", className: "ml-auto", children: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C" })] }) }, s.name))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C/\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C" }) }), _jsxs(CardContent, { className: "space-y-2", children: [_jsx(Label, { children: "\u0418\u043C\u044F" }), _jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "\u041D\u0430\u043F\u0440., Backend \u2014 \u0418\u043B\u044C\u044F" }), _jsx(Label, { children: "\u0420\u043E\u043B\u044C (\u043E\u043F\u0446.)" }), _jsx(Input, { value: role, onChange: (e) => setRole(e.target.value), placeholder: "\u0420\u043E\u043B\u044C \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438" }), _jsx(Button, { className: "w-full", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" }), _jsx("p", { className: "text-xs text-slate-500", children: "\u0413\u043E\u043B\u043E\u0441\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0438 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u044F\u0445" })] })] })] }));
}
function QAPage() {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(MessageSquare, { className: "h-5 w-5" }), "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043A \u0432\u0430\u0448\u0438\u043C \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C"] }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "\u0427\u0442\u043E \u0440\u0435\u0448\u0438\u043B\u0438 \u043F\u043E \u0437\u0430\u0434\u0430\u0447\u0435 #5?" }), _jsxs(Button, { children: [_jsx(Bot, { className: "h-4 w-4 mr-1" }), "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C"] })] }), _jsx("div", { className: "rounded-2xl border p-3 bg-white text-sm", children: "\u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043F\u043E\u0438\u0441\u043A \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043C. \u041E\u0442\u0432\u0435\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0441\u0441\u044B\u043B\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0430\u0439\u043C\u043A\u043E\u0434\u044B \u0438 \u0444\u0440\u0430\u0437\u044B." })] })] }));
}
function JobsPage() {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Loader2, { className: "h-5 w-5" }), "\u0417\u0430\u0434\u0430\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438"] }) }), _jsx(CardContent, { className: "space-y-2", children: mockMeetings.map((m) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border p-3 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Database, { className: "h-4 w-4" }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium", children: m.title }), _jsxs("div", { className: "text-xs text-slate-500", children: ["\u0421\u043E\u0437\u0434\u0430\u043D\u043E ", m.createdAt] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { variant: "outline", className: "capitalize", children: m.status }), _jsx(Button, { size: "sm", variant: "secondary", children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C" })] })] }, m.id))) })] }));
}
function SettingsPage() {
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "h-5 w-5" }), "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C"] }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium", children: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430" }), _jsx("div", { className: "text-xs text-slate-500", children: "\u0411\u0435\u0437 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043E\u0431\u043B\u0430\u0447\u043D\u044B\u0445 API" })] }), _jsx(Switch, { checked: true, readOnly: true })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm", children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F" }), _jsxs(Select, { defaultValue: "90", children: [_jsx(SelectTrigger, { className: "mt-1", children: _jsx(SelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0440\u043E\u043A" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "30", children: "30 \u0434\u043D\u0435\u0439" }), _jsx(SelectItem, { value: "90", children: "90 \u0434\u043D\u0435\u0439" }), _jsx(SelectItem, { value: "365", children: "1 \u0433\u043E\u0434" })] })] })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "h-5 w-5" }), "\u041C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D"] }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsxs("div", { children: [_jsx(Label, { className: "text-sm", children: "STT" }), _jsxs(Select, { defaultValue: "parakeet", children: [_jsx(SelectTrigger, { className: "mt-1", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "parakeet", children: "Parakeet (NeMo)" }), _jsx(SelectItem, { value: "whisper", children: "Whisper" })] })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm", children: "\u0414\u0438\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044F" }), _jsxs(Select, { defaultValue: "pyannote", children: [_jsx(SelectTrigger, { className: "mt-1", children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: _jsx(SelectItem, { value: "pyannote", children: "pyannote v3.1" }) })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm", children: "LLM \u0434\u043B\u044F \u0441\u0430\u043C\u043C\u0430\u0440\u0438/Q&A" }), _jsxs(Select, { defaultValue: "qwen30b", children: [_jsx(SelectTrigger, { className: "mt-1", children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: _jsx(SelectItem, { value: "qwen30b", children: "Qwen 3 30B" }) })] })] })] })] }), _jsxs(Card, { className: "lg:col-span-2", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Info, { className: "h-5 w-5" }), "\u041E \u0441\u0438\u0441\u0442\u0435\u043C\u0435"] }) }), _jsx(CardContent, { className: "text-sm text-slate-600", children: "\u0412\u0435\u0440\u0441\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430: 0.1 \u2022 \u041C\u0430\u043A\u0435\u0442 \u0434\u043B\u044F \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F IA/UX \u2022 \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430: Docker/on\u2011prem, REST API" })] })] }));
}
// ------------------ ROUTER HOST ------------------
export default function App() {
    return (_jsx(Router, { children: _jsx(Shell, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/meetings", element: _jsx(MeetingsList, {}) }), _jsx(Route, { path: "/meetings/:id", element: _jsx(MeetingDetailRoute, {}) }), _jsx(Route, { path: "/settings", element: _jsx(SettingsPage, {}) })] }) }) }));
}
function MeetingDetailRoute() {
    const location = useLocation();
    const id = location.pathname.split("/").pop();
    return _jsx(MeetingDetail, { id: id });
}
// ------------------ HELPERS ------------------
function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function colorFor(speaker) {
    const sp = mockMeetings[0].speakers.find((s) => s.name === speaker);
    return sp?.color ?? "#64748b";
}
function uniqSpeakers() {
    const map = new Map();
    mockMeetings.forEach((m) => {
        m.speakers.forEach((s) => {
            const prev = map.get(s.name);
            map.set(s.name, { name: s.name, color: s.color, count: (prev?.count ?? 0) + 1 });
        });
    });
    return Array.from(map.values());
}
