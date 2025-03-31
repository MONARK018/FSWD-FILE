import { existsSync, readdirSync, mkdirSync, renameSync } from 'fs';
import { join, extname } from 'path';

function organizeDirectory(directorypath) {
  try {

    if(!existsSync(directorypath))
        {
            throw new Error('Directory does not exists');
        }

    const files = readdirSync(directorypath);

    const fileTypes = {
      Images: ['.jpg', '.jpeg', '.png'],
      Documents: ['.pdf', '.docx', '.txt'],
      Videos: ['.mp4', '.avi']
    };

    Object.entries(fileTypes).forEach(([folder, extensions]) => {
      const folderpath = join(directorypath, folder);
      if (!existsSync(folderpath)) {
        mkdirSync(folderpath);
      }

      files.forEach(file => {
        const fileExtension = extname(file).toLowerCase();
        if (extensions.includes(fileExtension)) {
          const oldpath = join(directorypath, file);
          const newpath = join(folderpath, file);
          renameSync(oldpath, newpath);
        }
      });
    });

    console.log('Directory organized successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

organizeDirectory('C:/Users/Hirpara Monark/Pictures');
