// utils/calendarUtils.js
export const generateCalendarEvent = (event) => {
  // Format tanggal untuk kalender (YYYYMMDDTHHmmss)
  const formatDate = (dateStr, timeStr) => {
    const [day, month, year] = dateStr.split(' ');
    const months = {
      'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04', 'Mei': '05', 'Juni': '06',
      'Juli': '07', 'Agustus': '08', 'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
    };
    
    const [startTime, endTime] = timeStr.split(' - ');
    const startDate = `${year}${months[month]}${day.padStart(2, '0')}T${startTime.replace(':', '')}00`;
    const endDate = `${year}${months[month]}${day.padStart(2, '0')}T${endTime.replace(':', '')}00`;
    
    return { startDate, endDate };
  };

  const { startDate, endDate } = formatDate(event.date, event.time);
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//UKM IT//Calendar Event//ID',
    'BEGIN:VEVENT',
    `UID:${event.id}@ukmit.example.ac.id`,
    `DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}\\n\\nLokasi: ${event.location}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  return icsContent;
};

export const downloadCalendarEvent = (event) => {
  const icsContent = generateCalendarEvent(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};