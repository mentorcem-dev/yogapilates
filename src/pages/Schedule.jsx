import { useState } from 'react';
import { motion } from 'framer-motion';

const scheduleData = {
    'Pazartesi': [
        { time: '09:00', title: 'Reformer Pilates', level: 'Başlangıç', instructor: 'Elif Hoca', spots: 2 },
        { time: '12:00', title: 'Vinyasa Yoga', level: 'Her Seviye', instructor: 'Can Hoca', spots: 5 },
        { time: '18:30', title: 'Mat Pilates', level: 'Orta', instructor: 'Elif Hoca', spots: 0 },
        { time: '19:30', title: 'Reformer Pilates', level: 'İleri', instructor: 'Seda Hoca', spots: 1 }
    ],
    'Salı': [
        { time: '08:00', title: 'Yin Yoga', level: 'Her Seviye', instructor: 'Can Hoca', spots: 8 },
        { time: '10:00', title: 'Reformer Pilates', level: 'Orta', instructor: 'Seda Hoca', spots: 3 },
        { time: '18:00', title: 'Hamile Pilatesi', level: 'Özel Grup', instructor: 'Elif Hoca', spots: 2 },
        { time: '19:00', title: 'Power Yoga', level: 'İleri', instructor: 'Can Hoca', spots: 4 }
    ],
    'Çarşamba': [
        { time: '09:00', title: 'Reformer Pilates', level: 'Başlangıç', instructor: 'Elif Hoca', spots: 1 },
        { time: '18:30', title: 'Mat Pilates', level: 'Orta', instructor: 'Seda Hoca', spots: 6 }
    ],
    'Perşembe': [
        { time: '10:00', title: 'Reformer Pilates', level: 'Orta', instructor: 'Seda Hoca', spots: 0 },
        { time: '19:00', title: 'Vinyasa Yoga', level: 'Her Seviye', instructor: 'Can Hoca', spots: 3 }
    ],
    'Cuma': [
        { time: '09:00', title: 'Reformer Pilates', level: 'İleri', instructor: 'Elif Hoca', spots: 2 },
        { time: '18:00', title: 'Sound Healing & Yoga', level: 'Workshop', instructor: 'Can Hoca', spots: 10 }
    ],
    'Cumartesi': [
        { time: '10:00', title: 'Haftasonu Akışı', level: 'Her Seviye', instructor: 'Seda Hoca', spots: 5 },
        { time: '11:00', title: 'Reformer Pilates', level: 'Birebir', instructor: 'Elif Hoca', spots: 1 }
    ]
};

const days = Object.keys(scheduleData);

const ScheduleSection = () => {
    const [selectedDay, setSelectedDay] = useState(days[0]);

    return (
        <div className="section-container">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">PROGRAM</h4>
                    <h2>Haftalık Ders Programı</h2>
                    <p className="mt-4 text-gray-600">Dersinizi seçin ve hemen rezervasyon yapın.</p>
                </div>

                {/* Day Selector */}
                <div className="flex overflow-x-auto gap-2 mb-8 pb-4 justify-start md:justify-center" style={{ paddingBottom: '1rem' }}>
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${selectedDay === day
                                ? 'bg-primary text-white font-bold shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            style={{
                                backgroundColor: selectedDay === day ? 'var(--primary)' : '#f3f4f6',
                                color: selectedDay === day ? 'white' : '#4b5563',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule List */}
                <div className="schedule-list max-w-3xl mx-auto">
                    {scheduleData[selectedDay].map((cls, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm mb-4 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4"
                            style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: 'var(--shadow)',
                                marginBottom: '1rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div className="flex items-center gap-6">
                                <div className="text-center min-w-[80px]">
                                    <span className="block text-xl font-bold text-primary" style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>{cls.time}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1" style={{ margin: 0, fontSize: '1.2rem' }}>{cls.title}</h3>
                                    <p className="text-sm text-gray-500" style={{ color: '#666', fontSize: '0.9rem' }}>{cls.instructor} • {cls.level}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-sm rounded px-3 py-1" style={{ background: cls.spots > 0 ? '#e6fffa' : '#ffe6e6', color: cls.spots > 0 ? '#047857' : '#c53030' }}>
                                    {cls.spots > 0 ? `${cls.spots} Kişilik Yer Var` : 'Dolu'}
                                </div>
                                <button
                                    disabled={cls.spots === 0}
                                    className={`btn ${cls.spots === 0 ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'}`}
                                    style={{
                                        opacity: cls.spots === 0 ? 0.6 : 1,
                                        padding: '0.5rem 1.5rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {cls.spots === 0 ? 'Yedek Liste' : 'Rezervasyon'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
