import { useCallback, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

export const useImageExport = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const exportImage = useCallback(async (fileName: string = 'activity-stats.png') => {
        if (!ref.current) return;

        try {
            setIsExporting(true);
            const canvas = await html2canvas(ref.current, {
                useCORS: true,
                scale: 2, // Retina quality
                backgroundColor: null, // Transparent bg if possible
            });

            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Failed to export image:', err);
        } finally {
            setIsExporting(false);
        }
    }, []);

    return { ref, exportImage, isExporting };
};
