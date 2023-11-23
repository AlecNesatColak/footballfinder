// Import necessary modules and configure database connection
import User from '@/models/user';
import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connect(); // Connect to the database

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    await User.findByIdAndDelete(request.user_id) 
  } catch (error) {

  }
}
