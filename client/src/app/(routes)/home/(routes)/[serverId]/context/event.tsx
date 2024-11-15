"use client";

import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";

import { Event, Id } from "@/app/models/event";
import {
  createEventRequest,
  deleteEventRequest,
  getEventsRequest,
} from "@/app/interceptors/event";

interface EventContextTypes {
  events: Event[];
  errors: string[];
  getEvents: (id: Id) => Promise<void>;
  createEvent: (data: Event, id: Id) => Promise<void>;
  deleteEvent: (data: Id, id: Id) => Promise<void>;
}

export const EventContext = createContext<EventContextTypes | undefined>(
  undefined
);

export function useEvent() {
  const context = useContext(EventContext);

  if (context === undefined)
    throw new Error("useEvent must be used within a EventProvider");

  return context;
}

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [errors, setErrors] = useState([]);

  const getEvents = async (id: Id): Promise<void> => {
    try {
      const res = await getEventsRequest(id);
      setEvents(res.data);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const createEvent = async (data: Event, id: Id): Promise<void> => {
    try {
      const res = await createEventRequest(data, id);
      setEvents((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteEvent = async (data: Id, id: Id) => {
    try {
      const res = await deleteEventRequest(data, id);
      if (res.status === 200) {
        setEvents((prevState) =>
          prevState.filter((event) => event._id !== data)
        );
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <EventContext.Provider
      value={{ events, errors, getEvents, createEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
}
