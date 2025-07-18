import { useState, useEffect } from 'react';

export default function CalendarPage() {
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState('date'); // 'date' | 'month' | 'year'

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  const goToPrevious = () => {
    if (mode === 'date') {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    } else if (mode === 'month') {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
    } else if (mode === 'year') {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 10)));
    }
  };

  const goToNext = () => {
    if (mode === 'date') {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    } else if (mode === 'month') {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)));
    } else if (mode === 'year') {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 10)));
    }
  };

  const getDecade = (year) => {
    const start = Math.floor(year / 10) * 10;
    return Array.from({ length: 12 }, (_, i) => start - 1 + i);
  };

  return (
    <div className="p-6 max-w-md mx-auto text-white">
      <div className="bg-gray-800 p-4 rounded-md shadow text-center">
        <h1 className="text-4xl mb-2 font-mono">
          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </h1>
        <p className="mb-4">
          {now.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
          })}
        </p>

        <div className="flex justify-between items-center mb-2">
          <button onClick={goToPrevious} className="text-lg">◀</button>
          {mode === 'date' && (
            <button onClick={() => setMode('month')} className="text-xl font-semibold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </button>
          )}
          {mode === 'month' && (
            <button onClick={() => setMode('year')} className="text-xl font-semibold">
              {currentDate.getFullYear()}
            </button>
          )}
          {mode === 'year' && (
            <span className="text-xl font-semibold">
              {Math.floor(currentDate.getFullYear() / 10) * 10} - {Math.floor(currentDate.getFullYear() / 10) * 10 + 11}
            </span>
          )}
          <button onClick={goToNext} className="text-lg">▶</button>
        </div>

        {/* Mode: DATE */}
        {mode === 'date' && (
          <div className="grid grid-cols-7 gap-1 text-sm">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div key={d} className="text-gray-400">{d}</div>
            ))}
            {Array(firstDayIndex).fill(null).map((_, idx) => (
              <div key={`empty-${idx}`}></div>
            ))}
            {Array.from({ length: days }, (_, i) => {
              const day = i + 1;
              const isToday = day === now.getDate() &&
                currentDate.getMonth() === now.getMonth() &&
                currentDate.getFullYear() === now.getFullYear();
              return (
                <div
                  key={day}
                  className={`p-2 text-center rounded-full ${isToday ? 'bg-blue-600 font-bold' : ''}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        )}

        {/* Mode: MONTH */}
        {mode === 'month' && (
          <div className="grid grid-cols-4 gap-2 mt-4 text-lg">
            {monthNames.map((name, idx) => (
              <button
                key={name}
                onClick={() => {
                  setCurrentDate(new Date(currentDate.setMonth(idx)));
                  setMode('date');
                }}
                className={`p-2 rounded ${idx === now.getMonth() && currentDate.getFullYear() === now.getFullYear() ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
              >
                {name}
              </button>
            ))}
          </div>
        )}

        {/* Mode: YEAR */}
        {mode === 'year' && (
          <div className="grid grid-cols-4 gap-2 mt-4 text-lg">
            {getDecade(currentDate.getFullYear()).map((year) => (
              <button
                key={year}
                onClick={() => {
                  setCurrentDate(new Date(currentDate.setFullYear(year)));
                  setMode('month');
                }}
                className={`p-2 rounded ${year === now.getFullYear() ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'} ${year < Math.floor(currentDate.getFullYear() / 10) * 10 || year > Math.floor(currentDate.getFullYear() / 10) * 10 + 9 ? 'text-gray-500' : ''}`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
