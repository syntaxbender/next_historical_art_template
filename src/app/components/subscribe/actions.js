'use server';

import prisma from "../../lib/prisma";

const saveEmail = async (email) => {
  if (!email || typeof email !== 'string') {
    throw new Error('Invalid email');
  }

  try {
    const newMail = await prisma.subscribe.create({
      data: { email },
    });

    return { success: true, message: 'You have been registered to be informed about the latest campaigns and notifications.' };
  } catch (error) {
    console.error('Error saving email:', error);
    return { success: false, message: 'Unknown error occurred. Please try again later.' };
  }
}

export {saveEmail}
