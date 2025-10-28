import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import {
  Home,
  Upload,
  Mic2,
  Video,
  FileText,
  Users,
  Settings,
  Search,
  Sparkles,
  MessageSquare,
  Bot,
  Play,
  Pause,
  Scissors,
  Languages,
  ListChecks,
  Loader2,
  ChevronRight,
  Clock3,
  Shield,
  Database,
  Edit3,
  Filter,
  Info,
  Pencil,
} from "lucide-react";
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
    summary:
      "Обсудили дедлайны v0.6, риски диаризации, план на интеграцию Q&A. Приняли решение заморозить real-time до v0.7.",
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
function Shell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-sm border-r border-slate-200 p-4 hidden md:flex md:flex-col gap-2 z-40">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-6 w-6" />
          <span className="font-semibold">{APP_NAME}</span>
        </div>
        <NavItem to="/" icon={<Home className="h-4 w-4" />}>Дэшборд</NavItem>
        {/* <NavItem to="/uploads" icon={<Upload className="h-4 w-4" />}>Загрузка</NavItem>
        <NavItem to="/meetings" icon={<FileText className="h-4 w-4" />}>Созвоны</NavItem>
        <NavItem to="/speakers" icon={<Users className="h-4 w-4" />}>Спикеры</NavItem>
        <NavItem to="/qa" icon={<MessageSquare className="h-4 w-4" />}>Q&A</NavItem>
        <NavItem to="/jobs" icon={<Loader2 className="h-4 w-4" />}>Задания</NavItem>*/}
        <NavItem to="/settings" icon={<Settings className="h-4 w-4" />}>Настройки</NavItem>
        <div className="mt-auto text-xs text-slate-500">on-prem • локальная обработка</div>
      </aside>

      <main className="md:pl-64">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по транскриптам, спикерам, встречам…"
                className="pl-9"
              />
            </div>
            <Avatar className="h-8 w-8">
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="max-w-7xl mx-auto p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 ${active ? "bg-slate-100 font-medium" : "text-slate-700"
        }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

// ------------------ PAGES ------------------
function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5" />Последние встречи</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {mockMeetings.map((m) => (
            <Link key={m.id} to={`/meetings/${m.id}`} className="group">
              <div className="rounded-2xl border border-slate-200 p-4 bg-white hover:shadow-sm transition">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{m.title}</div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock3 className="h-4 w-4" />
                    <span>{m.duration} мин</span>
                    <Badge variant="outline" className="capitalize">{m.status}</Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{m.summary}</p>
                <div className="mt-3 flex gap-2">
                  {m.speakers.map((s) => (
                    <Badge key={s.id} style={{ backgroundColor: s.color }} className="text-white">
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" />Быстрая загрузка</CardTitle>
        </CardHeader>
        <CardContent>
          <UploadWidget />
          <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><Shield className="h-3 w-3" /> Локальная обработка, без облаков</div>
        </CardContent>
      </Card>
    </div>
  );
}

function UploadWidget() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center">
      <div className="flex justify-center mb-3">
        <Video className="h-5 w-5 mr-2" />
        <Mic2 className="h-5 w-5" />
      </div>
      <p className="text-sm text-slate-600">Перетащите файлы сюда или выберите на устройстве</p>
      <div className="mt-4 flex justify-center gap-2">
        <Button variant="secondary">Выбрать файлы</Button>
        <Button>
          <Upload className="h-4 w-4 mr-2" />Отправить
        </Button>
      </div>
      {files.length > 0 && (
        <div className="mt-4 text-left">
          {files.map((f) => (
            <div key={f.name} className="text-xs text-slate-500">{f.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function UploadsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Загрузить аудио/видео</CardTitle>
        </CardHeader>
        <CardContent>
          <UploadWidget />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Option title="Диаризация" icon={<Users className="h-4 w-4" />}>
              Определять спикеров и их реплики
            </Option>
            <Option title="Саммари" icon={<Bot className="h-4 w-4" />}>
              Краткое резюме по встрече
            </Option>
            <Option title="Q&A" icon={<MessageSquare className="h-4 w-4" />}>
              Вопросы к расшифровке
            </Option>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Очередь задач</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {mockMeetings.map((m) => (
            <div key={m.id} className="flex items-center justify-between rounded-xl border p-3">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium">{m.title}</div>
                  <div className="text-xs text-slate-500">{m.createdAt}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="capitalize">{m.status}</Badge>
                <Button variant="secondary" size="sm">Открыть</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function Option({ title, icon, children }: any) {
  return (
    <div className="rounded-2xl border p-3 bg-white">
      <div className="flex items-center gap-2 font-medium mb-1">{icon}{title}</div>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}

function MeetingsList() {
  return (
    <div className="space-y-3">
      {mockMeetings.map((m) => (
        <Link key={m.id} to={`/meetings/${m.id}`} className="block">
          <div className="rounded-2xl border bg-white p-4 hover:shadow-sm transition">
            <div className="flex items-center justify-between">
              <div className="font-medium">{m.title}</div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock3 className="h-4 w-4" />
                <span>{m.duration} мин</span>
                <Badge variant="outline" className="capitalize">{m.status}</Badge>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-1 line-clamp-1">{m.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MeetingDetail({ id }: { id: string }) {
  const navigate = useNavigate();
  const meeting = mockMeetings.find((m) => m.id === id)!;
  const [play, setPlay] = useState(false);
  const [rate, setRate] = useState([1]);
  const [selectedUtt, setSelectedUtt] = useState<string | null>(null);
  const [text, setText] = useState<string>(mockTranscript.map((u) => `[${fmtTime(u.start)}] ${u.speaker}: ${u.text}`).join("\n"));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="xl:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" /> {meeting.title}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="secondary" onClick={() => navigate(-1)}>
                  Назад
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-2xl border bg-slate-900 text-slate-100 p-4">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="secondary" onClick={() => setPlay((p) => !p)}>
                  {play ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <div className="w-40">
                  <Label className="text-xs">Скорость</Label>
                  <Slider value={rate} onValueChange={setRate} min={0.5} max={2} step={0.25} />
                </div>
                <Badge variant="outline">{meeting.duration} мин</Badge>
              </div>
              <div className="mt-3 h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-white/80 w-1/3" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Краткое саммари
            </CardTitle>
            <Button size="md" variant="default">
              <Sparkles className="h-4 w-4 mr-2" /> Обновить саммари
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">{meeting.summary}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5" /> Транскрипт
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
              <div className="col-span-full">
                <div className="space-y-2 w-full">
                  {mockTranscript.map((u) => (
                    <div
                      key={u.id}
                      className={`w-full rounded-lg border p-2 bg-white cursor-pointer transition-all ${selectedUtt === u.id ? "ring-2 ring-sky-400 shadow-sm" : ""
                        }`}
                      onClick={() => setSelectedUtt(u.id)}
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{fmtTime(u.start)}–{fmtTime(u.end)}</span>
                        <Button size="sm" variant="secondary" className="ml-2 h-6 px-2 py-0 text-xs flex items-center gap-1">
                          <Edit3 className="h-3 w-3" /> Править
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: colorFor(u.speaker) }} />
                        <div className="text-sm font-medium">{u.speaker}</div>
                      </div>
                      <p className="text-sm mt-1">{u.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="xl:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><MessageSquare className="h-5 w-5" />Q&A по транскрипту</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Спроси: какие сроки обсуждались?" />
            <Button><Bot className="h-4 w-4 mr-1" />Спросить</Button>
          </div>
          <div className="mt-4 rounded-xl border p-3 bg-white">
            <div className="text-xs text-slate-500">Пример ответа</div>
            <p className="text-sm mt-1">«Дедлайн v0.6 — пятница, 17:00.»</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SpeakersPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Каталог спикеров</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-3">
          {uniqSpeakers().map((s) => (
            <div key={s.name} className="rounded-2xl border p-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full" style={{ backgroundColor: s.color }} />
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.count} реплик</div>
                </div>
                <Button size="sm" variant="secondary" className="ml-auto">Переименовать</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Добавить/переименовать</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label>Имя</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Напр., Backend — Илья" />
          <Label>Роль (опц.)</Label>
          <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Роль для фильтрации" />
          <Button className="w-full">Сохранить</Button>
          <p className="text-xs text-slate-500">Голоса сохраняются и сопоставляются в новых записях</p>
        </CardContent>
      </Card>
    </div>
  );
}

function QAPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><MessageSquare className="h-5 w-5" />Вопросы к вашим транскриптам</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input placeholder="Что решили по задаче #5?" />
          <Button><Bot className="h-4 w-4 mr-1" />Спросить</Button>
        </div>
        <div className="rounded-2xl border p-3 bg-white text-sm">
          Вам доступен поиск по всем встречам. Ответы будут ссылаться на таймкоды и фразы.
        </div>
      </CardContent>
    </Card>
  );
}

function JobsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Loader2 className="h-5 w-5" />Задания обработки</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {mockMeetings.map((m) => (
          <div key={m.id} className="flex items-center justify-between rounded-xl border p-3 bg-white">
            <div className="flex items-center gap-3">
              <Database className="h-4 w-4" />
              <div>
                <div className="text-sm font-medium">{m.title}</div>
                <div className="text-xs text-slate-500">Создано {m.createdAt}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="capitalize">{m.status}</Badge>
              <Button size="sm" variant="secondary">Повторить</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SettingsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Безопасность и приватность</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Локальная обработка</div>
              <div className="text-xs text-slate-500">Без внешних облачных API</div>
            </div>
            <Switch checked readOnly />
          </div>
          <div>
            <Label className="text-sm">Политика хранения</Label>
            <Select defaultValue="90">
              <SelectTrigger className="mt-1"><SelectValue placeholder="Выберите срок" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 дней</SelectItem>
                <SelectItem value="90">90 дней</SelectItem>
                <SelectItem value="365">1 год</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5" />Модели и пайплайн</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-sm">STT</Label>
            <Select defaultValue="parakeet">
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="parakeet">Parakeet (NeMo)</SelectItem>
                <SelectItem value="whisper">Whisper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm">Диаризация</Label>
            <Select defaultValue="pyannote">
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pyannote">pyannote v3.1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm">LLM для саммари/Q&A</Label>
            <Select defaultValue="qwen30b">
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="qwen30b">Qwen 3 30B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5" />О системе</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Версия интерфейса: 0.1 • Макет для обсуждения IA/UX • Поддержка: Docker/on‑prem, REST API
        </CardContent>
      </Card>
    </div>
  );
}

// ------------------ ROUTER HOST ------------------
export default function App() {
  return (
    <Router>
      <Shell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/meetings" element={<MeetingsList />} />
          <Route path="/meetings/:id" element={<MeetingDetailRoute />} />
          {/* <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/uploads" element={<UploadsPage />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/jobs" element={<JobsPage />} /> */}
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Shell>
    </Router>
  );
}

function MeetingDetailRoute() {
  const location = useLocation();
  const id = location.pathname.split("/").pop()!;
  return <MeetingDetail id={id} />;
}

// ------------------ HELPERS ------------------
function fmtTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function colorFor(speaker: string) {
  const sp = mockMeetings[0].speakers.find((s) => s.name === speaker);
  return sp?.color ?? "#64748b";
}

function uniqSpeakers() {
  const map = new Map<string, { name: string; color: string; count: number }>();
  mockMeetings.forEach((m) => {
    m.speakers.forEach((s) => {
      const prev = map.get(s.name);
      map.set(s.name, { name: s.name, color: s.color, count: (prev?.count ?? 0) + 1 });
    });
  });
  return Array.from(map.values());
}